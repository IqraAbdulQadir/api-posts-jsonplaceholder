'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function FetchPostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/external');
        if (!response.ok) throw new Error('Failed to fetch posts');

        const data: Post[] = await response.json();
        setPosts(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Link key={post.id} href={`/posts/${post.id}`} className="border rounded p-4 shadow hover:bg-gray-100 transition">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p>{post.body.slice(0, 100)}...</p>
          </Link>
        ))}
      </div>
    </div>
  );
}