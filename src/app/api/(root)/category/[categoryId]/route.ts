import { NextResponse,NextRequest } from "next/server";

interface Params {
  params:{
    categoryId:string
  }
}

export async function GET ({ params }:Params){
  return NextResponse.json({DIY:`get Category ${params.categoryId}`})
};

export async function PUT ({ params }:Params){
  return NextResponse.json({DIY:`Change Category Info ${params.categoryId}`})
};

export async function PATCH ({ params }:Params){
  return NextResponse.json({DIY:`Update Category ${params.categoryId}`})
};
