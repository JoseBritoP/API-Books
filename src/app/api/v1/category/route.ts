import { NextResponse,NextRequest } from "next/server";
import { createCategory,getCategories } from "../../controllers/category";

export async function GET (req:NextRequest) {
  try {
    const categories = await getCategories();
    return NextResponse.json(categories,{status:200,statusText:'Categorías'});
  } catch (error:any) {
    return NextResponse.json({error:error.message},{status:404,statusText:'Not Found'})
  }
};

export async function POST (req:NextRequest) {
  const data = await req.json();
  try {
    const newCategory = await createCategory(data);
    return NextResponse.json(newCategory,{status:201,statusText:'Categoría creada'});
  } catch (error:any) {
    return NextResponse.json({error:error.message},{status:400,statusText:'Error'})
  }
};