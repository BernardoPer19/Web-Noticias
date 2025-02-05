import { fetchSortedNews } from "@/hooks/useFetchNews";
import Link from "next/link";

export default async function SportsNews() {
  const news = await fetchSortedNews("sport", "relevancy");
  if (!news || news.length === 0) {
    return (
      <p className="text-center text-gray-500">No hay noticias disponibles.</p>
    );
  }

  const mainNews = news[10];
  const secondaryNews = news.slice(5, 9);

  return (
    <section className="container mx-auto p-6 ">
   <h1 className="text-3xl p-6 font-bold">Deportes</h1>
      <div className="flex flex-col md:flex-row  rounded-lg overflow-hidden">
    
        <img
          src={mainNews.urlToImage}
          alt={mainNews.title}
          className="w-full md:w-1/2 h-72 object-cover"
        />
  
        <div className="p-6 flex flex-col justify-center md:w-1/2">


          <Link href={`/${mainNews.title}`}>
            <h2 className="text-4xl fond-bold cursor-pointer hover:underline">
              {mainNews.title}
            </h2>
          </Link>

          <p className="text-gray-600 mb-4">{mainNews.description}</p>
          <p className="text-sm text-gray-500">
            {new Date(mainNews.publishedAt).toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {secondaryNews.map((article) => (
          <div key={article.url} className="  rounded-lg overflow-hidden">
            <img
              src={article.urlToImage}
              alt={article.title}
              className="w-full h-40 object-cover"
            />
            <Link href={`/${article.title}`}>
              <h3 className="text-sm font-semibold hover:underline">
                {article.title}
              </h3>
            </Link>

          </div>
        ))}
      </div>
    </section>
  );
}
