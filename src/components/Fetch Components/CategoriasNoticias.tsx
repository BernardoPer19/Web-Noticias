import { fetchCategoryNews } from "@/hooks/useFetchNews";

async function CategoriasNoticias() {
  const news = await fetchCategoryNews("politics"); 

  return (
    <div className="flex flex-wrap gap-24 justify-center items-center">
      {news.map((article) => (
        <div className="w-80 h-96" key={article.url}>
          <img className="w-80 h-64" src={article.urlToImage} alt={article.title} />
          <h1 className="text-2xl font-bold">{article.title}</h1>
        </div>
      ))}
    </div>
  );
}

export default CategoriasNoticias;
