import { NextResponse } from "next/server";

// Mock user data
const users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Charlie", email: "charlie@example.com" },
];

export async function GET() {
  return NextResponse.json({ users });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newUser = {
      id: users.length + 1,
      ...body,
    };
    users.push(newUser);
    return NextResponse.json({ user: newUser }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
