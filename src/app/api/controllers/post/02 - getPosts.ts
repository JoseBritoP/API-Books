import { prisma } from "@/app/config/db";

import { PostInfo } from "@/app/api/interfaces/post";

const postFormat = (posts:PostInfo[]) => {
  return posts.map((post)=>{
    const { id, title, content, category } = post
    const { name } = post.user
    return {
      id:id,
      title:title,
      content:content,
      author: name,
      categories: !category.length ? 'Sin categorias' : category
    }
  })
}

export const getPosts = async() => {
  const posts = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      user: {
        select: {
          name: true, // Incluye el nombre del usuario
        },
      },
      category:{
        select:{
          id:true,
          name:true
        }
      }
    },
  });

  if(!posts.length) throw new Error(`No hay posts en la base de datos`);

  const cleanPosts =  postFormat(posts)
  return cleanPosts
};

export const getPost = async(postId:string) => {
  const post = await prisma.post.findUnique({
    where:{
      id:+postId
    },
    select:{
      id:true,
      title:true,
      content:true,
      category:{
        select:{
          id:true,
          name:true
        }
      }
    }
  });

  if(!post) throw new Error('No se encontró el post');

  return post
};

export const getPostsByTitle = async (title:string) => {
  const posts = await prisma.post.findMany({
    where:{
      title:{
        contains: title,
        mode: "insensitive"
      }
    },
    select: {
      id: true,
      title: true,
      content: true,
      user: {
        select: {
          name: true, // Incluye el nombre del usuario
        },
      },
      category:{
        select:{
          id:true,
          name:true
        }
      }
    },
  });

  if(!posts.length) throw new Error(`No hay títulos llamados ${title.toLowerCase()}`)
  const cleanPosts =  postFormat(posts)
  return cleanPosts
  return posts;
};