import { NextResponse,NextRequest } from "next/server";

import { createUser,getUsers } from "@/app/api/controllers/users";

export async function GET () {
  try {
    const users = await getUsers();
    return NextResponse.json(users,{status:200})
  } catch (error:any) {
    return NextResponse.json({error:error.message},{status:400})
  };
};

export async function POST (req:NextRequest) {
  const data = await req.json();
  try {
    const newUser = await createUser(data);
    return NextResponse.json(newUser,{status:201})
  } catch (error:any) {
    return NextResponse.json({error:error.message},{status:400})
  }
};