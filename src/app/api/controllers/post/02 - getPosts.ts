import { prisma } from "@/app/config/db";

interface Category {
  id:number
  name:string
}

interface PostInfo {
  id:number
  title:string
  content:string
  user:{
    name:string
  },
  category: Category[]
}

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