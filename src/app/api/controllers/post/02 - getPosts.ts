import { prisma } from "@/app/config/db";

export const getPosts = async() => {
  const posts = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      user: {
        select: {
          name: true, // Incluye el nombre del usuario
        },
      },
    },
  });

  if(!posts.length) throw new Error(`No hay posts en la base de datos`);

  return posts
};