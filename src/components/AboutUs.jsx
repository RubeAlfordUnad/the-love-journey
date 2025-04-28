import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-pink-100 to-transparent" />

      <div className="container mx-auto px-4 max-w-5xl text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-pink-600 mb-6"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Our Mission
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          At <span className="text-pink-500 font-semibold">The Love Journey</span>, our mission is to create meaningful connections that go beyond borders and expectations.
          We are dedicated to helping individuals find not just a partner, but the right partner — someone who truly shares their dreams, values, and vision for life.

          Every step of our matchmaking process is crafted with care, respect, and a deep commitment to your happiness.
          We believe that love deserves to be intentional, and that every person deserves to be seen, understood, and matched with someone who truly complements them.

          Your satisfaction and your journey toward lasting love are at the heart of everything we do.

          At The Love Journey, we don't just introduce people — we help build stories meant to last a lifetime.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Personalized Matches',
              desc: 'We use a blend of intuition and tech to connect you with someone truly compatible.',
            },
            {
              title: 'Curated Experiences',
              desc: 'Every interaction is designed to foster genuine emotional connections.',
            },
            {
              title: 'Support at Every Step',
              desc: 'You’re never alone — our team is here to help guide you with empathy and care.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-pink-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.2 }}
            >
              <Heart className="text-pink-500 w-8 h-8 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
