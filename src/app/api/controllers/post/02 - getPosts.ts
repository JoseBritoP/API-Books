import { prisma } from "@/app/config/db";

export const getPosts = async() => {
  const posts = await prisma.post.findMany();

  if(!posts.length) throw new Error(`No hay posts en la base de datos`);

  return posts
};