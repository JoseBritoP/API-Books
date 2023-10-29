import { NextResponse,NextRequest } from "next/server";

interface Params {
  params:{
    userId:string
  }
}

export async function GET ({ params }:Params){
  return NextResponse.json({DIY:`get User ${params.userId}`})
};

export async function PUT ({ params }:Params){
  return NextResponse.json({DIY:`Change User Info ${params.userId}`})
};

export async function PATCH ({ params }:Params){
  return NextResponse.json({DIY:`Update User ${params.userId}`})
};
