import { prisma } from "@/app/config/db";

import { UpdatePost as UpdatePostInterface,UpdatePostV2 } from "@/app/api/interfaces/post";

export const updatePost = async ({postId,data}:UpdatePostInterface) => {
  const user = await prisma.user.findUnique({
    where:{
      id:+data.userId
    }
  });

  if(!user) throw new Error(`Autor no encontrado`);

  const postToUpdate = await prisma.post.update({
    where:{
      id:+postId
    },
    data:{
      title:data.title,
      content:data.content
    }
  });

  if(!postToUpdate) throw new Error(`Error al actualizar el post`);

  return {
    message:'Post actualizado',
    postToUpdate
  };
}; 

export const updatePostInfo = async({postId,data}:UpdatePostV2) => {

  const categoriesToSet =  data.categories.map((categoryId) => {
    return { id: categoryId };
  });

  const user = await prisma.user.findUnique({
    where:{
      id:+data.userId
    }
  });

  if(!user) throw new Error(`Autor no encontrado`);

  const postToUpdate = await prisma.post.update({
    where: {
      id: +postId
    },
    data: {
      title:data.title && data.title,
      content:data.content && data.content,
      category: {
        set: categoriesToSet,
      }
    },
    include:{
      category:true
    }
  });

  if(!postToUpdate) throw new Error(`Error al actualizar el post`);

  return {
    message:'Post actualizado',
    postToUpdate
  };
};