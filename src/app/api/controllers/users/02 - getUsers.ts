import { prisma } from "@/app/config/db";

export const getUsers = async () => {
  const users = await prisma.user.findMany();
  if(!users.length) throw new Error('No hay usuarios');
  return users
};

export const getUser = async(userId:string) => {
  
  // const user = await prisma.user.findUnique({
  //   where:{
  //     id:+userId
  //   },
  //   include:{
  //     posts:true
  //   },
  // });

  const user = await prisma.user.findUnique({
    where: {
      id: +userId,
    },
    select: {
      id: true,         // Incluir campo 'id' del usuario
      name: true,       // Incluir campo 'name' del usuario
      posts: {
        select: {
          id: true,       // Incluir campo 'id' de los posts
          title: true,    // Incluir campo 'title' de los posts
          content:true    //Incluir campo 'content' de los posts
        },
      },
    },
  });

  if(!user) throw new Error(`No se encontró el usuario`);

  return user
};