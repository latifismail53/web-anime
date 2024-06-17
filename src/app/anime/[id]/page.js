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

  const shareToWhatsApp = () => {
    const text = `Check out this anime: ${anime.title} - ${window.location.href}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  };

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-6">
        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-2 text-center">
          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
            🚀 Popularity
          </h4>
          <p className="text-gray-700 dark:text-gray-400 text-xl">
            #{anime.popularity}
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-2 text-center">
          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
            🤘 Members
          </h4>
          <p className="text-gray-700 dark:text-gray-400 text-xl">
            {anime.members.toLocaleString()}
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-2 text-center">
          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
            🌟 Ranked
          </h4>
          <p className="text-gray-700 dark:text-gray-400 text-xl">
            #{anime.rank}
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-2 text-center">
          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
            ❤️ Favorites
          </h4>
          <p className="text-gray-700 dark:text-gray-400 text-xl">
            {anime.favorites}
          </p>
        </div>
      </div>
      <div className="flex justify-between lg:justify-start md:justify-start gap-4">
        <button
          onClick={shareToWhatsApp}
          className="bg-green-500 hover:bg-green-600  text-white font-bold py-2 px-4 rounded"
        >
          <p className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 48 48"
            >
              <path
                fill="#fff"
                d="M4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5c5.1,0,9.8,2,13.4,5.6	C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19c0,0,0,0,0,0h0c-3.2,0-6.3-0.8-9.1-2.3L4.9,43.3z"
              ></path>
              <path
                fill="#fff"
                d="M4.9,43.8c-0.1,0-0.3-0.1-0.4-0.1c-0.1-0.1-0.2-0.3-0.1-0.5L7,33.5c-1.6-2.9-2.5-6.2-2.5-9.6	C4.5,13.2,13.3,4.5,24,4.5c5.2,0,10.1,2,13.8,5.7c3.7,3.7,5.7,8.6,5.7,13.8c0,10.7-8.7,19.5-19.5,19.5c-3.2,0-6.3-0.8-9.1-2.3	L5,43.8C5,43.8,4.9,43.8,4.9,43.8z"
              ></path>
              <path
                fill="#cfd8dc"
                d="M24,5c5.1,0,9.8,2,13.4,5.6C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19h0c-3.2,0-6.3-0.8-9.1-2.3	L4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5 M24,43L24,43L24,43 M24,43L24,43L24,43 M24,4L24,4C13,4,4,13,4,24	c0,3.4,0.8,6.7,2.5,9.6L3.9,43c-0.1,0.3,0,0.7,0.3,1c0.2,0.2,0.4,0.3,0.7,0.3c0.1,0,0.2,0,0.3,0l9.7-2.5c2.8,1.5,6,2.2,9.2,2.2	c11,0,20-9,20-20c0-5.3-2.1-10.4-5.8-14.1C34.4,6.1,29.4,4,24,4L24,4z"
              ></path>
              <path
                fill="#40c351"
                d="M35.2,12.8c-3-3-6.9-4.6-11.2-4.6C15.3,8.2,8.2,15.3,8.2,24c0,3,0.8,5.9,2.4,8.4L11,33l-1.6,5.8	l6-1.6l0.6,0.3c2.4,1.4,5.2,2.2,8,2.2h0c8.7,0,15.8-7.1,15.8-15.8C39.8,19.8,38.2,15.8,35.2,12.8z"
              ></path>
              <path
                fill="#fff"
                fill-rule="evenodd"
                d="M19.3,16c-0.4-0.8-0.7-0.8-1.1-0.8c-0.3,0-0.6,0-0.9,0	s-0.8,0.1-1.3,0.6c-0.4,0.5-1.7,1.6-1.7,4s1.7,4.6,1.9,4.9s3.3,5.3,8.1,7.2c4,1.6,4.8,1.3,5.7,1.2c0.9-0.1,2.8-1.1,3.2-2.3	c0.4-1.1,0.4-2.1,0.3-2.3c-0.1-0.2-0.4-0.3-0.9-0.6s-2.8-1.4-3.2-1.5c-0.4-0.2-0.8-0.2-1.1,0.2c-0.3,0.5-1.2,1.5-1.5,1.9	c-0.3,0.3-0.6,0.4-1,0.1c-0.5-0.2-2-0.7-3.8-2.4c-1.4-1.3-2.4-2.8-2.6-3.3c-0.3-0.5,0-0.7,0.2-1c0.2-0.2,0.5-0.6,0.7-0.8	c0.2-0.3,0.3-0.5,0.5-0.8c0.2-0.3,0.1-0.6,0-0.8C20.6,19.3,19.7,17,19.3,16z"
                clip-rule="evenodd"
              ></path>
            </svg>{" "}
            Share
          </p>
        </button>
        <button
          onClick={copyToClipboard}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Copy Link
        </button>
      </div>
    </div>
  );
};

export default AnimeDetailPage;
