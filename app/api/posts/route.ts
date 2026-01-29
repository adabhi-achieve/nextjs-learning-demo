import { NextResponse } from "next/server";

// Mock posts data
const posts = [
  { id: 1, title: "First Post", content: "This is the first post", author: "Alice" },
  { id: 2, title: "Second Post", content: "This is the second post", author: "Bob" },
  { id: 3, title: "Third Post", content: "This is the third post", author: "Charlie" },
];

export async function GET() {
  return NextResponse.json({ posts });
}
