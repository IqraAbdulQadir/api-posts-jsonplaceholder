import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Fetch posts from the JSONPlaceholder API
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) throw new Error('Failed to fetch posts');
    
    const posts = await response.json();

    // Return the posts as JSON
    return NextResponse.json(posts);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}
