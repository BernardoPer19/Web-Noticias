import { fetchCategoryNews } from '@/hooks/useFetchNews';
import Link from 'next/link';
import React from 'react'

async function Relacionados() {
  const relatedNews = await fetchCategoryNews("sports"); 

  return (
    <div>
        <div className="flex items-center justify-center gap-10">
        {relatedNews.slice(0, 3).map((newsItem) => (
          <Link
            key={newsItem.title}
            href={`/${encodeURIComponent(newsItem.title)}`}
          >
            <div className="flex flex-col justify-center items-center w-80 ">
              <img className="w-full" src={newsItem.urlToImage} alt="" />
              <h3 className="text-lg font-bold hover:underline">
                {newsItem.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Relacionados