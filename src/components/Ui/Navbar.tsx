"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const categories = [
  "science",
  "politics",
  "security",
  "business",
  "culture",
  "sports",
  "health",
  "general",
  "technology",
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        
        <Link href="/" className="text-2xl font-bold">
          NewsApp
        </Link>

      
        <ul className="hidden md:flex gap-6 text-sm uppercase">
          {categories.map((category) => (
            <li key={category}>
              <Link
                href={`/category/${category}`}
                className={`hover:text-yellow-400 transition-colors ${
                  pathname.includes(category) ? "text-yellow-400 font-semibold" : ""
                }`}
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>

     
        <div className="md:hidden">
          <button className="text-white text-xl">☰</button>
        </div>
      </div>
    </nav>
  );
}
