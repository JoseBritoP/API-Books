import { NextResponse,NextRequest } from "next/server";

interface Params {
  params:{
    postId:string
  }
}

export async function GET (_request:NextRequest,{ params }:Params){
  return NextResponse.json({DIY:`get Post ${params.postId}`})
};

export async function PUT (_request:NextRequest,{ params }:Params){
  return NextResponse.json({DIY:`Change Post Info ${params.postId}`})
};

export async function PATCH (_request:NextRequest,{ params }:Params){
  return NextResponse.json({DIY:`Update Post ${params.postId}`})
};


export async function DELETE (_request:NextRequest,{ params }:Params){
  return NextResponse.json({DIY:`Delete Post ${params.postId}`})
};