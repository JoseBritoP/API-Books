import { NextResponse,NextRequest } from "next/server";

interface Params {
  params:{
    categoryId:string
  }
}

export async function GET (_request:NextRequest,{ params }:Params){
  return NextResponse.json({DIY:`get Category ${params.categoryId}`})
};

export async function PUT (_request:NextRequest,{ params }:Params){
  return NextResponse.json({DIY:`Change Category Info ${params.categoryId}`})
};

export async function PATCH (_request:NextRequest,{ params }:Params){
  return NextResponse.json({DIY:`Update Category ${params.categoryId}`})
};


export async function DELETE (_request:NextRequest,{ params }:Params){
  return NextResponse.json({DIY:`Delete category ${params.categoryId}`})
};