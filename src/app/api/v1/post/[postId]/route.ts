import { NextResponse,NextRequest } from "next/server";
import { updatePost,deletePost,changeAuthorPost,updatePostInfo,getPost,insertCategoriesInPost } from "@/app/api/controllers/post";

interface Params {
  params:{
    postId:string
  }
}

export async function GET (_request:NextRequest,{ params }:Params){
  try {
    const post = await getPost(params.postId);
    return NextResponse.json(post,{status:200,statusText:'Post OK'})
  } catch (error:any) {
    return NextResponse.json({error:error.message},{status:404,statusText:'Post not found'})
  }
};

export async function PUT (request:NextRequest,{ params }:Params){
  const data = await request.json();
  try {
    // const updatedPost = await updatePost({postId:params.postId,data});
    const updatedPost = await updatePostInfo({postId:params.postId,data});
    return NextResponse.json(updatedPost,{status:200,statusText:'Post Update'})
  } catch (error:any) {
    return NextResponse.json({error:error.message},{status:400})
  }
};

export async function PATCH (request:NextRequest,{ params }:Params){
  const data:any = await request.json();
  try {
    const postChanged = !data.author ? await insertCategoriesInPost(data) : await changeAuthorPost({postId:params.postId,userId:data});
    return NextResponse.json(postChanged,{status:200,statusText:'Post Update'})
  } catch (error:any) {
    return NextResponse.json({error:error.message},{status:400})
  }
};


export async function DELETE (_request:NextRequest,{ params }:Params){
  try {
    const postDeleted = await deletePost(params.postId);
    return NextResponse.json(postDeleted,{status:200,statusText:'Post Deleted'})
  } catch (error:any) {
    return NextResponse.json({error:error.message},{status:400})
  }
};