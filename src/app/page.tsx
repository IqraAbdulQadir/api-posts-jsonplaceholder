'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to My Project!</h1>
        <p className="text-gray-700 mt-2">Explore the features and pages below.</p>
      </header>

      <nav className="flex flex-wrap justify-center gap-6">
        <Link href="/fetch-posts" className="bg-blue-500 text-white px-6 py-3 rounded shadow hover:bg-blue-600 transition">
            Fetch Posts
          
        </Link>
        {/* Add more links as needed */}
        {/* <Link href="/about">
          <a className="bg-green-500 text-white px-6 py-3 rounded shadow hover:bg-green-600 transition">
            About
          </a>
        </Link> */}
      </nav>

      <footer className="absolute bottom-4 text-gray-600 text-sm">
        Made with ❤️ using Next.js
      </footer>
    </div>
  );
}
