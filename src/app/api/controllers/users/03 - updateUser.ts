import { prisma } from "@/app/config/db";

interface Props {
  id:string
  data:{
    name:string
  }
}

export const updateUser = async ({id,data}:Props) => {
  const userUpdated = await prisma.user.update({
    where:{
      id:+id
    },
    data:{
      name:data.name
    }
  });

  if(!userUpdated) throw new Error(`No se pudo actualizar la información del usuario ${id}`);

  return {
    message: 'Usuario actualizado',
    userUpdated
  }
};