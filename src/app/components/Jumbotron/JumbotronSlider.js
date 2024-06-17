"use client";

import Link from "next/link";
import Slider from "react-slick";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const JumbotronSlider = ({ animeList }) => {
  const [currentImage, setCurrentImage] = useState(
    animeList[0]?.images?.webp?.large_image_url
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (current) => {
      setCurrentImage(animeList[current]?.images?.webp?.large_image_url);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      className="bg-center bg-no-repeat bg-inherit bg-cover bg-gray-700 bg-blend-multiply"
      style={{ backgroundImage: `url(${currentImage})` }}
    >
      <div className="px-4 mx-auto max-w-full-xl text-center py-44 lg:h-full">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Recommendation Anime for you
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="px-4 md:px-10 lg:px-20">
          <Slider {...settings}>
            {animeList.map((anime) => {
              const imageUrl =
                anime?.images?.webp?.large_image_url ||
                "https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg";
              return (
                <div key={anime.mal_id} className="p-2">
                  <Link
                    href={`/anime/${anime.mal_id}`}
                    className="w-auto bg-slate-700 opacity-70 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                  >
                    <div className="w-full h-60 lg:h-96 flex items-center justify-center">
                      <img
                        className="max-h-full w-full object-contain rounded-t-lg"
                        src={imageUrl}
                        alt={anime.title}
                      />
                    </div>
                    <div className="p-2">
                      <div className="text-lg font-bold text-white truncate">
                        {anime.title}
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default JumbotronSlider;
