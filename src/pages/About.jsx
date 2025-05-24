// src/pages/About.jsx
import React from "react";
import { FaQuoteLeft, FaFeatherAlt, FaRegLightbulb } from "react-icons/fa";

export default function About() {
  return (
    <section className="bg-white dark:bg-very-dark-gray text-gray-800 dark:text-gray-300 py-16 px-6 sm:px-12 lg:px-24 transition-colors duration-300 uppercase">
      <h2 className="text-4xl sm:text-4xl font-bold mb-8 text-center font-serif">
        My Portfolio Website
      </h2>
      <div className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed font-serif">
        {/* Pirmas paragrafas su šviesos lemputės ikona */}
        <p className="flex items-start gap-4">
          <FaRegLightbulb className="mt-1 text-rose-900 dark:text-rose-700 text-xl shrink-0" />
          A while ago, an idea sparked in my mind – to create a personal portfolio website. The beginning was humble and simple, but gradually, this vision grew into a much more substantial project. I'm delighted to present a website built using the latest technologies, where I hope you'll find a lot of useful information.
        </p>

        {/* Antras paragrafas su citatos ikona */}
        <p className="flex items-start gap-4">
          <FaQuoteLeft className="mt-1 text-rose-900 dark:text-rose-700 text-xl shrink-0" />
          Here, you'll discover a wealth of inspiring quotes and biographies of famous personalities. I believe visitors will find insights into how philosophy and the thoughts of great thinkers influence our lives. After all, we grew up surrounded by countless quotes, and now the ideas of many authors have become an integral part of our thinking.
        </p>

        {/* Trečias paragrafas su plunksnos ikona */}
        <p className="flex items-start gap-4">
          <FaFeatherAlt className="mt-1 text-rose-900 dark:text-rose-700 text-xl shrink-0" />
          This project was born unexpectedly – during rehabilitation at a sanatorium. I decided to use the free moments, which would normally be for rest, meaningfully and realize an old dream.
        </p>

        {/* Padėkos ir palaikymo paragrafai (be ikonų, pagal originalią struktūrą) */}
        <p className="text-gray-700 dark:text-gray-300">
          I sincerely want to thank the dear people without whom this project would not have seen the light of day. First and foremost, a big THANK YOU to my significant other for their invaluable support, strength, wisdom, and creativity. Thank you to my son for daily inspiration. And, of course, thank you to my mother and grandmother for their endless care and nurture.
        </p>

        <p className="text-gray-700 dark:text-gray-300">
          If you believe my work is worthy of appreciation and would like to contribute to the realization of future projects, I would be sincerely grateful for your support. I still have many ideas and plans that I can't wait to turn into reality!
        </p>
      </div>
    </section>
  );
}