import { prisma } from "@/app/config/db";

export const deleteCategory = async (categoryId:string) => {

  const categoryFound = await prisma.category.findUnique({
    where:{
      id:+categoryId
    }
  });

  if(!categoryFound) throw new Error(`No existe la categoría de id ${categoryId}`)

  const category = await prisma.category.delete({
    where:{
      id:+categoryId
    }
  });

  if(!category) throw new Error(`No existe la categoría de id ${categoryId}`);

  return {
    message:'Categoría borrada',
    category
  };
};