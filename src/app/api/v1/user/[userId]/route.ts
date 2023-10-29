import { NextResponse,NextRequest } from "next/server";
import { updateUser,changeUserInfo,deleteUser } from "@/app/api/controllers/users";

interface Params {
  params:{
    userId:string
  }
}

export async function GET (_request:NextRequest,{ params }:Params){
  console.log(params)
  try {
    if(!params || params.userId === undefined) throw new Error('Params undefined')
    return NextResponse.json({DIY:`get User ${params.userId}`})
} catch (error:any) {
    return NextResponse.json({error:error.message},{status:404})
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