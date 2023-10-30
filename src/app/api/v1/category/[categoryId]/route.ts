import { NextResponse,NextRequest } from "next/server";
import { getCategory,deleteCategory } from "@/app/api/controllers/category";

interface Params {
  params:{
    categoryId:string
  }
}

export async function GET (_request:NextRequest,{ params }:Params){
  try {
    const category = await getCategory(params.categoryId);
    return NextResponse.json(category,{status:200,statusText:'OK'})
  } catch (error:any) {
    return NextResponse.json({error:error.message},{status:404,statusText:'Category Not found'})
  }
};

export async function PUT (_request:NextRequest,{ params }:Params){
  return NextResponse.json({DIY:`Change Category Info ${params.categoryId}`})
};

export async function PATCH (_request:NextRequest,{ params }:Params){
  return NextResponse.json({DIY:`Update Category ${params.categoryId}`})
};


export async function DELETE (_request:NextRequest,{ params }:Params){
  try {
    const categoryDeleted = await deleteCategory(params.categoryId);
    return NextResponse.json(categoryDeleted,{status:200,statusText:'Deleted'})
  } catch (error:any) {
    return NextResponse.json({error:error.message},{status:404,statusText:'Error'})
  }
};