import { prisma } from "@/app/config/db";
import { NewUser } from "@/app/api/interfaces/user";


const userExist = async (name:string) => {
  const user = await prisma.user.findMany({
    where:{
      name
    }
  });

  if(user.length > 0) throw new Error('El usuario ya existe');

};

export const createUser = async (data:NewUser) => {

  await userExist(data.name);

  const newUser = await prisma.user.create({
    data:{
      name:data.name
    }
  });

  if(!newUser) throw new Error(`No se pudo crear el usuario de nombre ${data.name}`);

  return {
    message: 'Usuario creado',
    newUser
  }
};