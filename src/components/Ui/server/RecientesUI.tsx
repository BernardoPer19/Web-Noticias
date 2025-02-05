import { fetchSortedNews } from "@/hooks/useFetchNews";
import Link from "next/link";
import RecientesRight from "./RecientesRight";

async function RecientesUI() {
  const news = await fetchSortedNews("breaking news", "publishedAt");

  if (!news.length) return <p>No hay noticias disponibles.</p>;

  const leftNews = news.slice(0, 3);
  const centerNews = news[52];

  return (
    <main className="h-screen  p-6 m-auto flex items-center flex-col justify-center gap-5">
      <h1 className="text-start w-full text-4xl font-bold">Noticias Recientes</h1>
      <div className="grid grid-cols-4 gap-6">
    
        <div className="flex flex-col justify-center gap-4 col-span-1 ">
          {leftNews.map((article) => (
            <div key={article.url} className=" p-2 rounded-lg">
              <img
                src={article.urlToImage}
                alt={article.title}
                className="w-full h-28 object-cover rounded-lg"
              />
              <Link href={`/${article.title}`}>
                <h2 className="text-sm font-semibold cursor-pointer hover:underline">{article.title}</h2>
              </Link>
            </div>
          ))}
        </div>

    
        <div className="col-span-2   rounded-lg overflow-hidden flex flex-col items-center justify-center">
          <img
            src={centerNews.urlToImage}
            alt={centerNews.title}
            className="w-full h-96 object-cover"
          />
          <div className="p-4">
            <Link href={`/${centerNews.title}`}>
              <h2 className="text-3xl font-bold cursor-pointer hover:underline">{centerNews.title}</h2>
            </Link>
            <p className="text-sm text-gray-400  mt-2">
              {centerNews.description}
            </p>
            <p className="text-sm text-gray-500">
              {new Date(centerNews.publishedAt).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* 🔴 Noticias recientes (derecha) */}
          <RecientesRight />
      </div>
    </main>
  );
}

export default RecientesUI;
