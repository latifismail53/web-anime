import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AnimeList = ({ data, loading }) => {
  return (
    <>
      <div className="grid grid-cols-2 m-3 md:grid-cols-6 lg:grid-cols-6 my-5 gap-4">
        {loading
          ? Array(6)
              .fill()
              .map((_, index) => (
                <>
                  <div className="grid gap-5">
                    <Skeleton key={index} height={400} className="w-64" />
                    <div className="grid grid-cols-2 gap-5">
                      <Skeleton height={20} className="w-64" />
                      <Skeleton height={20} className="w-64" />
                    </div>
                  </div>
                </>
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
    </>
  );
};

export default AnimeList;
