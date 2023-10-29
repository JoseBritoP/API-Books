import { NextResponse,NextRequest } from "next/server";

interface Params {
  params:{
    postId:string
  }
}

export async function GET ({ params }:Params){
  return NextResponse.json({DIY:`get Post ${params.postId}`})
};

export async function PUT ({ params }:Params){
  return NextResponse.json({DIY:`Change Post Info ${params.postId}`})
};

export async function PATCH ({ params }:Params){
  return NextResponse.json({DIY:`Update Post ${params.postId}`})
};
