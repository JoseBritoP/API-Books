import { prisma } from "@/app/config/db";

export const deleteUser = async (id:string) => {

  const existingUser = await prisma.user.findUnique({
    where: {
      id: +id,
    },
  });

  if (!existingUser) throw new Error(`El usuario con id ${id} no existe.`)

  const userDeleted = await prisma.user.delete({
    where:{
      id:+id
    }
  });

  if(!userDeleted) throw new Error(`No se pudo eliminar el usuario de id: ${id}`)

  return {
    message:'Usuario eliminado',
    userDeleted
  };
}