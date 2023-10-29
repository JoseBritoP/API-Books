import { prisma } from "@/app/config/db";

interface Props {
  id:string
  data:{
    name:string
  }
}

export const changeUserInfo = async ({id,data}:Props) => {
  const userChange = await prisma.user.update({
    where:{
      id:+id
    },
    data:{
      name:data.name
    }
  });

  if(!userChange) throw new Error(`No se pudo actualizar la información del usuario ${id}`);

  return {
    message: 'Usuario actualizado',
    userChange
  }
};