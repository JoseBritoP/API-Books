import { prisma } from "@/app/config/db";

interface Props {
  title:string
  content:string
  userId:string
};

export const createPost = async (data:Props) => {

  const author = await prisma.user.findUnique({where:{
    id:+data.userId
  }});

  if(!author) throw new Error(`No se encontró el author`);

  const newPost = await prisma.post.create({
    data:{
      title:data.title,
      content:data.content,
      userId:+data.userId
    }
  });

  if(!newPost) throw new Error(`Error al crear el post`);

  return {
    message:'Post creado',
    newPost
  }
};