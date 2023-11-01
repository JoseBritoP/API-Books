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
interface Props {
  postId:string,
  data:{
    categories:number[]
  }
}
export const insertCategoriesInPost = async({postId,data}:Props) => {
  const categoriesToSet =  data.categories.map((categoryId) => {
    return { id: categoryId };
  });
  
  const postWithCategories = await prisma.post.update({
    where:{
      id:+postId
    },
    data:{
      category:{
        set:categoriesToSet
      },
    },
    include:{
      category:true
    }
  });

  if(!postWithCategories) throw new Error('No se pudo agregar categorías al post');
  return {
    message:'Post actualizado',
    postWithCategories
  };
}