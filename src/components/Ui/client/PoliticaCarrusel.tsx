"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import Link from "next/link";

interface Article {
  urlToImage: string;
  title: string;
}

interface Props {
  news: Article[];
}

const PoliticsCarousel: React.FC<Props> = ({ news }) => {
  return (
    <section className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Noticias de Politica</h2>

      <Swiper
        modules={[Autoplay]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        className="mySwiper"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {news.map((article, index) => (
          <SwiperSlide
            key={index}
            className="shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={article.urlToImage}
              alt={article.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-3">
              <Link href={`/${article.title}`}>
                <h3 className="text-sm font-semibold hover:underline">
                  {article.title}
                </h3>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PoliticsCarousel;
