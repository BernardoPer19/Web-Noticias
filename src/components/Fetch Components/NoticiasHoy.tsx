import { fetchSortedNews } from "@/hooks/useFetchNews";

async function NoticiasHoy() {
  const news = await fetchSortedNews("everything", "publishedAt");



  return (
    <div>
      <h2 className="text-xl font-bold">Noticias de hoy</h2>
      {news.length === 0 ? (
        <p>No hay noticias disponibles.</p>
      ) : (
        <div className="flex flex-wrap gap-24 justify-center items-center">
          {news.slice(0,4).map((article) => (
            <div className="w-80 h-96" key={article.url}>
              <img className="w-80 h-64" src={article.urlToImage} alt={article.title} />
              <h1 className="text-2xl font-bold">{article.title}</h1>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


export default NoticiasHoy