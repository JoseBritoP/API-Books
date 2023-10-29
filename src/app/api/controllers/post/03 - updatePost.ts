import { prisma } from "@/app/config/db";

interface Props {
  postId:string,
  data:{
    title:string
    content:string
    userId:string
  }
};

export const updatePost = async ({postId,data}:Props) => {
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