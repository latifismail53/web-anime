import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AnimeList = ({ data = [], loading }) => {
  return (
    <section>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mx-4 my-5 border-blue-300 md:mx-0 lg:mx-0 gap-3 md:gap-4 lg:gap-5">
        {loading
          ? Array.from({ length: data.length }).map((_, index) => (
              <div key={index} className="md:w-auto lg:w-full rounded-lg">
                <Skeleton height={362} className="rounded-t-lg" />
                <div className="mt-4">
                  <Skeleton width="80%" className="mb-4" />
                  <Skeleton width="60%" className="mb-4" />
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
    </section>
  );
};

export default AnimeList;
