import { fetchSortedNews } from "@/hooks/useFetchNews";

async function RecientesUI() {
  const news = await fetchSortedNews("breaking news", "publishedAt");

  if (!news.length) return <p>No hay noticias disponibles.</p>;

  // Dividir las noticias en secciones
  const leftNews = news.slice(0, 3);
  const centerNews = news[5];
  const rightNews = news.slice(3, 8);

  return (
    <main className="h-screen  p-6 m-auto flex items-center flex-col justify-center gap-5">
      <h1 className="text-start w-full text-2xl">Noticias Recientes</h1>
      <div className="grid grid-cols-4 gap-6">
        {/* 🟢 Noticias pequeñas (izquierda) */}
        <div className="flex flex-col justify-center gap-4 col-span-1 ">
          {leftNews.map((article) => (
            <div key={article.url} className=" p-2 rounded-lg">
              <img
                src={article.urlToImage}
                alt={article.title}
                className="w-full h-28 object-cover rounded-lg"
              />
              <h2 className="text-sm font-semibold mt-2">{article.title}</h2>
            </div>
          ))}
        </div>

        {/* 🔵 Noticia grande (centro) */}
        <div className="col-span-2   rounded-lg overflow-hidden flex flex-col items-center justify-center">
          <img
            src={centerNews.urlToImage}
            alt={centerNews.title}
            className="w-full h-96 object-cover"
          />
          <div className="p-4">
            <h1 className="text-2xl font-bold">{centerNews.title}</h1>
            <p className="text-sm text-gray-400  mt-2">
              {centerNews.description}
            </p>
          <p className="text-sm text-gray-500">{new Date(centerNews.publishedAt).toLocaleDateString()}</p>

          </div>
        </div>

        {/* 🔴 Noticias recientes (derecha) */}
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
              <h2 className="text-sm">{article.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default RecientesUI;
