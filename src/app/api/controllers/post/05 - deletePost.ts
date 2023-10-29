import { prisma } from "@/app/config/db";

export const deletePost = async(postId:string) => {
  const postDeleted = await prisma.post.delete({
    where:{
      id:+postId
    }
  });

  if(!postDeleted) throw new Error(`No se pudo borrar el post: ${postId}`);

  return {
    message:'Post eliminado',
    postDeleted
  }
};