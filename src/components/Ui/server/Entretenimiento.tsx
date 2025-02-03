import { fetchCategoryNews } from "@/hooks/useFetchNews";
import Link from "next/link";

export async function Entretenimiento() {
    const entertainmentNews = await fetchCategoryNews("entertainment");

  return (
      <div>
        <h2 className="text-2xl font-bold mt-10">
          🎭 Noticias de Entretenimiento
        </h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {entertainmentNews.slice(0, 4).map((newsItem) => (
            <Link
              key={newsItem.title}
              href={`/${encodeURIComponent(newsItem.title)}`}
            >
              <div className="w-64 p-2 shadow-lg rounded-lg hover:shadow-xl transition">
                <img
                  className="w-full h-40 object-cover rounded-md"
                  src={newsItem.urlToImage}
                  alt={newsItem.title}
                />
                <h3 className="text-md font-bold mt-2 hover:underline">
                  {newsItem.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
    </div>
  );
}

export default Entretenimiento;
