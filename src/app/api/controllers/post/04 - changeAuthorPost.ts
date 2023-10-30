import { prisma } from "@/app/config/db";
import { ChangeAuthorPost as ChangeAuthorPostInterface } from "@/app/api/interfaces/post";

export const changeAuthorPost = async({postId,userId}:ChangeAuthorPostInterface) => {
  const postToChange = await prisma.post.update({
    where:{
      id:+postId
    },
    data:{
      userId:+userId
    }
  });

  if(!postToChange) throw new Error(`No se pudo cambiar el author del post ${postId}`);

  return {
    message:'Autor cambiado',
    postToChange
  }
};