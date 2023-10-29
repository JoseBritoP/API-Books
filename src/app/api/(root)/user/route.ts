import { NextResponse,NextRequest } from "next/server";

export async function GET () {
  return NextResponse.json({DIY:'get Users'},{status:200})
};

export async function POST () {
  return NextResponse.json({DIY:"create User"},{status:201});
};