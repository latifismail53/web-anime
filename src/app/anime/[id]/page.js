"use client";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AnimeDetailPage = ({ params: { id } }) => {
  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnimeDetail = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${process.env.API_ANIME}/anime/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setAnime(data.data);
      } catch (error) {
        console.error("Error fetching anime detail:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimeDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto py-8 px-4">
        <Skeleton height={400} />
        <div className="my-4">
          <Skeleton height={30} width="80%" />
          <Skeleton height={20} width="60%" />
          <Skeleton height={20} width="30%" />
        </div>
      </div>
    );
  }

  if (!anime) {
    return <div className="container mx-auto py-8">Anime not found</div>;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
        {anime.title}{" "}
        <span className="text-xl text-blue-700 dark:text-blue-400">
          {anime.title_japanese}
        </span>
      </h1>
      <p className="text-sm mb-4 text-gray-700 dark:text-gray-400">
        {anime.background || "No background information available."}
      </p>
      <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-6">
        <div className="flex flex-col lg:flex-row">
          <img
            className="w-full lg:w-1/3 rounded-s-none lg:rounded-s-lg lg:mb-0"
            src={anime.images.webp.large_image_url}
            alt={anime.title}
          />
          <div className="flex flex-col p-5 justify-between lg:w-3/4">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Synopsis
              </h2>
              <hr className="h-px mb-4 bg-gray-200 border-0 dark:bg-gray-700" />
              <p className="text-gray-700 dark:text-gray-400 text-justify first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">
                {anime.synopsis}
              </p>
              {/* Trailer */}
              {anime.trailer && anime.trailer.url && (
                <div className="mt-4">
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Trailer:
                  </h2>
                  <iframe
                    width="100%"
                    height="315"
                    src={`${anime.trailer.embed_url}?modestbranding=1&autoplay=1&showinfo=0`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <h4 className="font-semibold text-2lg text-gray-900 dark:text-white">
                  Episodes
                </h4>
                <p className="text-gray-700 text-2lg dark:text-gray-400">
                  {anime.episodes}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-2lg text-gray-900 dark:text-white">
                  Score
                </h4>
                <p className="text-gray-700 text-2lg dark:text-gray-400">
                  {anime.score}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Rating
                </h4>
                <p className="text-gray-700 dark:text-gray-400">
                  {anime.rating}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Status
                </h4>
                <p className="text-gray-700 dark:text-gray-400">
                  {anime.status}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-2 text-center">
          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
            🚀Popularity
          </h4>
          <p className="text-gray-700 dark:text-gray-400 text-xl">
            #{anime.popularity}
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-2 text-center">
          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
            🤘Members
          </h4>
          <p className="text-gray-700 dark:text-gray-400 text-xl">
            {anime.members.toLocaleString()}
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-2 text-center">
          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
            🌟Ranked
          </h4>
          <p className="text-gray-700 dark:text-gray-400 text-xl">
            #{anime.rank}
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-2 text-center">
          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
            ❤️Favorites
          </h4>
          <p className="text-gray-700 dark:text-gray-400 text-xl">
            {anime.favorites}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetailPage;
