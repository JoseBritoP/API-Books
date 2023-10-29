import { prisma } from "@/app/config/db";

interface Props {
  postId:string,
  userId:string
}

export const changeAuthorPost = async({postId,userId}:Props) => {
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