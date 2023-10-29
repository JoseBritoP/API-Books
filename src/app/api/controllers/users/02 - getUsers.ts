import { prisma } from "@/app/config/db";

export const getUsers = async () => {
  const users = await prisma.user.findMany();
  if(!users.length) throw new Error('No hay usuarios');
  return users
};