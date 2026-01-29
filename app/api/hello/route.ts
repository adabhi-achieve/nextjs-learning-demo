import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ 
    message: "Hello from API Route!",
    timestamp: new Date().toISOString(),
    method: "GET"
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ 
    message: "Hello from POST!",
    received: body,
    timestamp: new Date().toISOString()
  });
}
