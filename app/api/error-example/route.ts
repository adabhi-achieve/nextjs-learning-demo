import { NextResponse } from "next/server";

export async function GET() {
  // Simulate an error
  return NextResponse.json(
    { error: "This is a simulated API error" },
    { status: 500 }
  );
}
