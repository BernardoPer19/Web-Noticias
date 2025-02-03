import PoliticsCarousel from "@/components/Ui/CarruselTecnologia";
import SportsNews from "@/components/Ui/Deportes";
import ScienceNewsCarousel from "@/components/Ui/NegociosCarrucel";
import RecientesUI from "@/components/Ui/RecientesUI";
import { fetchSortedNews } from "@/hooks/useFetchNews";

export default async function Home() {
  const scienceNews = await fetchSortedNews("science", "relevancy");
  const politicsNews = await fetchSortedNews("politics", "relevancy");

  return (
    <main className="container mx-auto">
      <RecientesUI />
      <ScienceNewsCarousel news={scienceNews.slice(0, 10)} />
      <SportsNews />
      <PoliticsCarousel news={politicsNews.slice(0, 10)} />
    </main>
  );
}
