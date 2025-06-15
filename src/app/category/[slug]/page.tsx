// app/category/[slug]/page.tsx

import { fetchSearchNews } from "@/hooks/useFetchNews";
import { NewsTypes } from "@/types/NewsTypes";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function PageFetch(props: PageProps) {
  const { slug } = await props.params;
  const news = await fetchSearchNews(encodeURIComponent(slug));

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 capitalize">{slug} News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((article: NewsTypes, i: number) => (
          <div
            key={i}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <img
              src={article.urlToImage}
              className="w-full h-40 object-cover rounded-md"
              alt={article.title}
            />
            <h2 className="text-xl font-semibold">{article.title}</h2>
            <p className="text-gray-600">{article.description}</p>
            <Link
              href={`/${article.title}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-2 block"
            >
              Leer más
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
