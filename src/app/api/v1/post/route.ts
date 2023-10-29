import { NextResponse,NextRequest } from "next/server";

export async function GET () {
  return NextResponse.json({DIY:'get Posts'},{status:200})
};

export async function POST () {
  return NextResponse.json({DIY:"create Post"},{status:201});
};