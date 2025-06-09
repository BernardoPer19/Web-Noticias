import Link from "next/link";
import { fetchSearchNews, fetchSortedNews } from "@/hooks/useFetchNews";
import RecientesRight from "@/components/Ui/server/RecientesRight";
import ScienceNewsCarousel from "@/components/Ui/client/CienciaCarrucel";
import { NewsTypes } from "@/types/NewsTypes";
import CompartirBtn from "@/components/Ui/client/CompartirBtn";
import Relacionados from "@/components/Ui/server/Relacionados";
import UltimasNoticias from "@/components/Ui/server/UltimasNoticias";
import Entretenimiento from "@/components/Ui/server/Entretenimiento";

export default async function NewsDetail({ params }: { params: any }) {
  // 💡 ¡Aquí está el truco!
  const { slug } = await params;
  const decodedTitle = decodeURIComponent(slug);
  const news = await fetchSearchNews(encodeURIComponent(decodedTitle));
  const article = news.find((item: NewsTypes) => item.title === decodedTitle);

  if (!article) {
    return (
      <p className="text-center text-gray-500 text-lg mt-10">
        ❌ Noticia no encontrada.
      </p>
    );
  }

  const scienceNews = await fetchSortedNews("science", "relevancy");

  return (
    <main className="p-6 container m-auto">
      <Link href="/" className="text-blue-500 hover:underline text-sm">
        ⬅ Volver a Inicio
      </Link>
      <div className="flex gap-10">
        <div>
          <h1 className="text-4xl font-bold mt-4 ">{article.title}</h1>

          <p className=" text-sm mt-2">
            🗓️ Publicado el:
            {new Date(article.publishedAt).toLocaleDateString()}
          </p>

          <img
            src={article.urlToImage}
            alt={article.title}
            className="w-full h-80 object-cover mt-6 rounded-lg shadow-lg"
          />

          <div className="mt-6 space-y-4 leading-relaxed">
            <p className="text-lg font-semibold">{article.description}</p>
            <p className="">{article.content}</p>
            <p className="">Autores: {article.author}</p>
            <a href={article.url} className="text-blue-500">
              🔗 Abre Para Ver La Fuente!
            </a>
          </div>

          <p className="text-sm mt-2">
            👀 {Math.floor(Math.random() * 5000) + 100} vistas
          </p>

          <CompartirBtn article={article} />
        </div>
        <RecientesRight />
      </div>

      <h2 className="text-2xl font-bold mt-10">🔗 Noticias Relacionadas</h2>
      <Relacionados />

      <ScienceNewsCarousel news={scienceNews.slice(10, 20)} />

      <UltimasNoticias />
      <Entretenimiento />
    </main>
  );
}
