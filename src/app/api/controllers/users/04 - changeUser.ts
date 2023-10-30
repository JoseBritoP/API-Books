import { prisma } from "@/app/config/db";

import { ChangeUser as ChangeUserInterface} from "@/app/api/interfaces/user";


export const changeUserInfo = async ({id,data}:ChangeUserInterface) => {
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