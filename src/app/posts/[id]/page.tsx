import { notFound } from 'next/navigation';
import Link from 'next/link';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function fetchPost(id: string): Promise<Post | null> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!response.ok) return null;
  return response.json();
}

export default async function PostPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const post = await fetchPost(params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
         <Link href='/'>
    <h1 className="text-2xl font-bold mb-4 text-green-600">Home</h1>
    </Link>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700 mb-6">{post.body}</p>
      <p className="text-gray-500 text-sm">Post ID: {post.id}</p>
    </div>
  );
}
