import { prisma } from "@/app/config/db";

interface UserInfo {
  id:number
  name:string
  posts:{
    id:number,
    title:string,
    content:string,
    category:{
      id:number
      name:string
    }[]
  }[]
}
const userFormat = (users:UserInfo[]) => {
  return users.map((user)=>{
    const { id,name,posts} = user;
    return {
      id,
      name,
      posts: !posts.length ? 'No tiene publicaciones' : posts.map((post)=>{
        return {
          id:post.id,
          title:post.title,
          content:post.content,
          category: !post.category.length ? 'No tiene categorías' : post.category
        }
      })
    }
  })
};

export const getUsers = async () => {
  const users = await prisma.user.findMany({
    select:{
      id:true,
      name:true,
      posts:{
        select:{
          id:true,
          title:true,
          content:true,
          category:{
            select:{
              id:true,
              name:true
            }
          }
        },
      }
    }
  });
  if(!users.length) throw new Error('No hay usuarios');

  const cleanUsers = userFormat(users)
  return cleanUsers
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

export const getUsersByName = async (name:string) => {
  const users = await prisma.user.findMany({
    where:{
      name:{
        contains:name,
        mode:'insensitive'
      }
    },
    select:{
      id:true,
      name:true,
      posts:{
        select:{
          id:true,
          title:true,
          content:true,
          category:{
            select:{
              id:true,
              name:true
            }
          }
        },
      }
    }
  });

  if(!users.length) throw new Error(`No hay usuarios llamados ${name.toLowerCase()}`)

  const cleanUsers = userFormat(users);
  return cleanUsers;
};