import { fetchSortedNews } from "@/hooks/useFetchNews";
import { NewsTypes } from "@/types/NewsTypes";
import Link from "next/link";
import React from "react";




async function RecientesRight() {

const news = await fetchSortedNews("breaking news", "publishedAt");
const rightNews = news.slice(3, 8);

  return (
    <div className="flex flex-col justify-center gap-6 col-span-1">
      {rightNews.map((article) => (
        <div
          key={article.url}
          className="flex gap-2  p-2 rounded-lg items-center"
        >
          <img
            src={article.urlToImage}
            alt={article.title}
            className="w-20 h-20 object-cover rounded-lg"
          />
          <Link href={`/${article.title}`}>
            <h2 className="text-sm cursor-pointer hover:underline">
              {article.title}
            </h2>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default RecientesRight;
