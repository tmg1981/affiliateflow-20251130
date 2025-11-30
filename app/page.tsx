export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">AffiliateFlow</h1>
      <p className="mb-8">Generate affiliate posts with AI</p>
      <Link href="/create" className="bg-blue-600 px-6 py-3 rounded text-white">
        Start Creating
      </Link>
    </div>
  );
}
