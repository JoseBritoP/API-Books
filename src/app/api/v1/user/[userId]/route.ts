import { NextResponse,NextRequest } from "next/server";
import { updateUser,changeUserInfo,deleteUser,getUser } from "@/app/api/controllers/users";

interface Params {
  params:{
    userId:string
  }
}

export async function GET (_request:NextRequest,{ params }:Params){
  try {
    const user = await getUser(params.userId);
    return NextResponse.json(user,{status:200,statusText:'User found'})
} catch (error:any) {
    return NextResponse.json({error:error.message},{status:404,statusText:'User not found'})
  }
};

export async function PUT (request:NextRequest,{ params }:Params){
  const data = await request.json();
  try {
    const updatedUser = await updateUser({id:params.userId,data});
    return NextResponse.json(updatedUser,{status:200,statusText:'Usuario actualizado'});
  } catch (error:any) {
    return NextResponse.json({error:error.message},{status:400})
  }
};

export async function PATCH (request:NextRequest,{ params }:Params){
  const data = await request.json();
  try {
    const changedUser = await changeUserInfo({id:params.userId,data});
    return NextResponse.json(changedUser,{status:200,statusText:'Información del usuario cambiada'});
  } catch (error:any) {
    return NextResponse.json({error:error.message},{status:400})
  }
};

export async function DELETE (_request:NextRequest,{ params }:Params){
  try {
    const userDeleted = await deleteUser(params.userId);
    return NextResponse.json(userDeleted,{status:200,statusText:'Usuario eliminado'})    
  } catch (error:any) {
    return NextResponse.json({error:error.message},{status:404})
  }
};