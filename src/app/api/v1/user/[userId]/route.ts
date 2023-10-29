import { NextResponse,NextRequest } from "next/server";

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

export async function PUT (_request:NextRequest,{ params }:Params){
  return NextResponse.json({DIY:`Change User Info ${params.userId}`})
};

export async function PATCH (_request:NextRequest,{ params }:Params){
  return NextResponse.json({DIY:`Update User ${params.userId}`})
};

export async function DELETE (_request:NextRequest,{ params }:Params){
  return NextResponse.json({DIY:`Delete User ${params.userId}`})
};