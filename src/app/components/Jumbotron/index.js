import JumbotronSlider from "./JumbotronSlider";

const Page = async () => {
  const response = await fetch(
    `${process.env.API_ANIME}/recommendations/anime`
  );
  const data = await response.json();

  const animeList = data.data
    .flatMap((animeRecommendation) => animeRecommendation.entry)
    .slice(0, 8);

  return (
    <div>
      <JumbotronSlider animeList={animeList} />
      {/* Komponen lainnya seperti AnimeList, Footer, dll */}
    </div>
  );
};

export default Page;
