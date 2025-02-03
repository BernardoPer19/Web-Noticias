
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Autoplay } from "swiper/modules";
// import Link from "next/link";

// function SliderScience() {
//   return (
//     <div>
//       <Swiper
//         pagination={{ clickable: true }}
//         spaceBetween={30}
//         modules={[Autoplay]}
//         autoplay={{
//           delay: 2000,
//           disableOnInteraction: false,
//         }}
//         loop={true}
//         slidesPerView={3}
//         className="mySwiper"
//       >
//         {news.slice(0, 5).map((article, index) => (
//           <SwiperSlide key={index} className="rounded-lg overflow-hidden">
//             <img
//               src={article.urlToImage}
//               alt={article.title}
//               className="w-full h-40 object-cover"
//             />
//             <div className="p-3">
//               <Link href={`/${article.title}`}>
//                 <h3 className="text-sm font-semibold hover:underline">
//                   {article.title}
//                 </h3>
//               </Link>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// export default SliderScience;
