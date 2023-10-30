import { prisma } from "@/app/config/db";

export const getCategories = async () => {
  const categories = await prisma.category.findMany();
  if(!categories.length) throw new Error('No hay categorías');
  return categories
};

export const getCategory = async (categoryId:string) => {
  const category = await prisma.category.findUnique({
    where:{
      id:+categoryId
    }
  });

  if(!category) throw new Error(`No existe la categoría de id ${categoryId}`);

  return category;
};