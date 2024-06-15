import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AnimeList = ({ data = [], loading }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {loading
        ? Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="w-auto rounded-lg shadow-lg">
              <Skeleton height={380} />
              <div className="mt-4">
                <Skeleton width="80%" />
                <Skeleton width="60%" />
                <Skeleton width="30%" />
              </div>
            </div>
          ))
        : data.map((anime) => (
            <Link
              href={`/anime/${anime.mal_id}`}
              key={anime.mal_id}
              className="w-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="w-full h-60 lg:h-96 flex items-center justify-center">
                <img
                  className="max-h-full w-full object-contain rounded-t-lg"
                  alt={anime.title}
                  src={anime.images.webp.large_image_url}
                />
              </div>
              <div className="p-2">
                <div
                  className="text-lg font-bold text-white truncate"
                  title={anime.title}
                >
                  {anime.title}
                </div>
                <div className="grid pt-2 grid-rows-2 lg:grid-cols-2 md:grid-cols-2 justify-between">
                  <div className="text-sm text-slate-200">
                    Episode {anime.episodes}
                  </div>
                  <div className="text-sm text-left lg:text-right text-slate-200">
                    ⭐ {anime.score}
                  </div>
                </div>
                <span className="text-sm dark:text-slate-400 ">
                  {anime.rating}
                </span>
              </div>
            </Link>
          ))}
    </div>
  );
};

export default AnimeList;
