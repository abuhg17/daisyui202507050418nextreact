// components/NavBar.tsx (React + Next.js)
"use client";
import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-base-100 shadow-sm p-3">
      <div className="flex items-center justify-between">
        {/* 左側：漢堡按鈕 */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="btn btn-ghost md:hidden"
          aria-label="Toggle menu"
        >
          {!menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>

        {/* 右側標題群 */}
        <div className="flex flex-col flex-1 ml-4">
          <h1 className="text-xl font-bold">This is Nav.</h1>
          <h2>🔢Nust(React)</h2>
          <h2>🔢daisyUI(Tailwind)</h2>
        </div>
      </div>

      {/* 導覽連結 */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } flex flex-col md:flex-row md:space-x-4 mt-2 md:block`}
      >
        <Link href="/" className="btn btn-ghost text-xl">
          Home page
        </Link>
        <Link href="/about" className="btn btn-ghost text-xl">
          About page
        </Link>
        <Link href="/blog/202507050418" className="btn btn-ghost text-xl">
          Blog page 202507050418
        </Link>
        <Link href="/countdown" className="btn btn-ghost text-xl">
          Countdown page
        </Link>
        <Link href="/bilibili" className="btn btn-ghost text-xl">
          Bilibili page
        </Link>
        <Link href="/firebasefood" className="btn btn-ghost text-xl">
          FirebaseFood page
        </Link>
        <Link href="/youtube" className="btn btn-ghost text-xl">
          Youtube page
        </Link>
      </div>
    </nav>
  );
}
