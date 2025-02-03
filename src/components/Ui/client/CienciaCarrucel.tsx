"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import Link from "next/link";

interface NewsArticle {
  title: string;
  urlToImage: string;
}

interface ScienceNewsCarouselProps {
  news: NewsArticle[];
}

export default function ScienceNewsCarousel({
  news,
}: ScienceNewsCarouselProps) {
  return (
    <section className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Noticias de Ciencia</h2>

      <Swiper
        pagination={{ clickable: true }}
        spaceBetween={30}
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={3}
        className="mySwiper"
      >
        {news.slice(0, 5).map((article, index) => (
          <SwiperSlide key={index} className="rounded-lg overflow-hidden">
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
}
