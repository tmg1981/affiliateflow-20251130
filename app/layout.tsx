import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white min-h-screen flex">
        <aside className="w-64 bg-gray-800 p-4">
          <h1 className="text-2xl font-bold text-cyan-400 mb-8">AffiliateFlow</h1>
          <nav className="space-y-4">
            <Link href="/" className="block p-2 rounded hover:bg-gray-700">Home</Link>
            <Link href="/create" className="block p-2 rounded hover:bg-gray-700">Create Post</Link>
            <Link href="/my-posts" className="block p-2 rounded hover:bg-gray-700">My Posts</Link>
            <Link href="/settings" className="block p-2 rounded hover:bg-gray-700">Settings</Link>
          </nav>
        </aside>
        <main className="flex-1 p-8">{children}</main>
      </body>
    </html>
  );
}
