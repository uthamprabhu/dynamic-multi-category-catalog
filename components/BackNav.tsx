"use client";

import { useRouter } from "next/navigation";

export default function BackNav() {
  const router = useRouter();

  return (
    <div className="mb-4 flex items-center gap-3">
      <button
        onClick={() => router.back()}
        className="cursor-pointer text-sm px-3 py-1.5 rounded-md border hover:bg-gray-100 transition"
      >
        ← Back
      </button>

      <a
        href="/"
        className="cursor-pointer text-sm text-gray-500 hover:underline"
      >
        Home
      </a>
    </div>
  );
}