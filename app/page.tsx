import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <h1 className="text-5xl font-bold text-cyan-400 mb-6">AffiliateFlow</h1>
      <p className="text-xl text-gray-300 mb-10 max-w-2xl">
        ساخت پست‌های افیلیت با هوش مصنوعی در چند ثانیه
      </p>
      <Link
        href="/create"
        className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 px-10 py-5 rounded-xl text-white font-bold text-lg shadow-lg transition transform hover:scale-105"
      >
        ساخت اولین پست
      </Link>
    </div>
  );
}
