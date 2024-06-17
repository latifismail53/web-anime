import React from "react";

const Jumbotron = () => {
  const backgroundImage =
    "url('https://img.freepik.com/free-photo/japan-background-digital-art_23-2151546140.jpg?t=st=1718609915~exp=1718613515~hmac=8094f936c8e5a346bc405554953de703ffc2ce282635e431f6a0043e4df1e4d2&w=1380')";

  return (
    <div
      className="relative w-full min-h-96 bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage }}
    >
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative z-10 text-center text-white p-5">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Anime Movie Apps
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Discover the latest and greatest in anime movies and series.
        </p>
        <p className="text-lg md:text-xl">Explore Now!</p>
      </div>
    </div>
  );
};

export default Jumbotron;
