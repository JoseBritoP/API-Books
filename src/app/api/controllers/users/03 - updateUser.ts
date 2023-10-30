import { prisma } from "@/app/config/db";
import { UpdateUser as UpdateUserInterface } from "@/app/api/interfaces/user";

export const updateUser = async ({id,data}:UpdateUserInterface) => {
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