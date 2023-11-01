import { prisma } from "@/app/config/db";

import { NewPost,NewPostV2 } from "@/app/api/interfaces/post";

export const createPost = async (data:NewPost) => {
  const author = await prisma.user.findUnique({where:{
    id:+data.userId
  }});

  if(!author) throw new Error(`No se encontró el author`);

  const newPost = await prisma.post.create({
    data:{
      title:data.title,
      content:data.content,
      userId:+data.userId
    }
  });

  if(!newPost) throw new Error(`Error al crear el post`);

  return {
    message:'Post creado',
    newPost
  }
};

export const createPostWithCategories = async (data:NewPostV2) => {

  // Transforma los IDs de categorías en un formato adecuado para el connect
  const categoriesToConnect = data.categories && data.categories.map((categoryId) => {
    return { id: categoryId };
  });

  const categoriesInDB = data.categories && data.categories.map(async(category)=>{
    const categoryBD = await prisma.category.findUnique({
      where:{
        id:category
      }
    });
    if(!categoryBD) throw new Error('La categoría no existe')
  })
  await Promise.all(categoriesInDB)

  const newPost = data.categories ? await prisma.post.create({
    data:{
      title:data.title,
      content:data.content,
      userId:+data.userId,
      category: {
        connect: categoriesToConnect,
      },
    },
    include:{
      category:true
    }
  }) : await prisma.post.create({
    data:{
      title:data.title,
      content:data.content,
      userId:+data.userId
    }
  });;

  if(!newPost) throw new Error('Error al crear el post con categorías');

  return {
    message:'Post creado',
    newPost
  }

};