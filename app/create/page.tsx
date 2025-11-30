'use client';
import { useState } from 'react';

export default function CreatePost() {
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    // Stub for Gemini
    alert('Post generated! Go to My Posts.');
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create Post</h1>
      <button onClick={handleGenerate} disabled={loading} className="w-full bg-green-600 p-3 rounded text-white">
        {loading ? 'Generating...' : 'Generate'}
      </button>
    </div>
  );
}
