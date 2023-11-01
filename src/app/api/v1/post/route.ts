import { NextResponse,NextRequest } from "next/server";
import { createPost,getPosts,createPostWithCategories,getPostsByTitle } from '@/app/api/controllers/post'

export async function GET (req:NextRequest) {
  const title = req.nextUrl.searchParams.get('title')
  try {
    const posts = title ? await getPostsByTitle(title) : await getPosts();
    return NextResponse.json(posts,{status:200,statusText:'All Posts'})
  } catch (error:any) {
    return NextResponse.json({error:error.message},{status:404})
  }
};

export async function POST (req:NextRequest) {
  const data:any = await req.json();
  try {
    // const newPost = await createPost(data);
    const newPost = data.categories ? await createPostWithCategories(data) : await createPost(data);
    return NextResponse.json(newPost,{status:201,statusText:'Post creado'})
  } catch (error:any) {
    return NextResponse.json({error:error.message},{status:400})
  }
};