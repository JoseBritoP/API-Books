import { NextResponse,NextRequest } from "next/server";
import { createPost,getPosts } from '@/app/api/controllers/post'

export async function GET () {
  try {
    const allPosts = await getPosts();
    return NextResponse.json(allPosts,{status:200,statusText:'All Posts'})
  } catch (error:any) {
    return NextResponse.json({error:error.message},{status:404})
  }
};

export async function POST (req:NextRequest) {
  const data = await req.json();
  try {
    const newPost = await createPost(data);
    return NextResponse.json(newPost,{status:201,statusText:'Post creado'})
  } catch (error:any) {
    return NextResponse.json({error:error.message},{status:400})
  }
};