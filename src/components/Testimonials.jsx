import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Heart } from 'lucide-react'; // Importing the heart icon
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: "Sarah L.",
    quote: "The Love Journey helped me find someone truly special.",
  },
  {
    name: "Mark T.",
    quote: "A heartfelt experience from start to finish!",
  },
  {
    name: "Anna K.",
    quote: "I’ve never felt so seen and understood before.",
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-pink-50 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-pink-700 mb-12">
          Love Stories
        </h2>

        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.name} className="p-4">
              <div className="bg-white rounded-3xl shadow-md p-8 flex flex-col items-center h-full hover:shadow-xl transition-shadow duration-300">
                {/* Heart Icon */}
                <Heart className="text-pink-400 mb-4 animate-pulse" size={28} />
                
                {/* Quote */}
                <p className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                  “{t.quote}”
                </p>

                {/* Name */}
                <p className="text-pink-600 font-semibold text-xl">
                  {t.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
