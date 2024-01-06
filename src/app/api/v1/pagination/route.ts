import { NextRequest,NextResponse } from "next/server";
import { getPostByPage } from "../../controllers/post";

export async function GET(req:NextRequest){
  const page = req.nextUrl.searchParams.get('page')
  // const pageSize = req.nextUrl.searchParams.get('pageSize')
  try {
    if(!page) throw new Error('Faltan el párametro page');
    const posts =  await getPostByPage(+page);
    return NextResponse.json(posts,{status:200,statusText:'Ok'})
  } catch (error:any) {
    return NextResponse.json({error:error.message})
  }
}