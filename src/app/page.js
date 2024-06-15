"use client";
import { useState, useEffect } from "react";
import AnimeList from "./components/AnimeList";
import Footer from "./components/Footer";
import Header from "./components/AnimeList/Header";

const Page = () => {
  const [animeData, setAnimeData] = useState([]); // State untuk menyimpan data anime
  const [currentPage, setCurrentPage] = useState(1); // State untuk melacak halaman saat ini
  const [loading, setLoading] = useState(true); // State untuk melacak status pemuatan
  const [numpages, setNumPages] = useState(true); // State untuk melacak status pemuatan

  // Fungsi untuk memuat data anime dari API
  const fetchAnimeData = async (page) => {
    setLoading(true); // Mulai pemuatan
    try {
      const response = await fetch(
        `${process.env.API_ANIME}/top/anime?page=${page}&limit=6`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setAnimeData(data.data || []);
      setCurrentPage(page);
      setNumPages(data.pagination.items);
    } catch (error) {
      console.error("Error fetching anime data:", error);
    } finally {
      setLoading(false); // Selesai pemuatan
    }
  };

  const pagination = (page) => {
    return (
      <span className="text-sm text-gray-700 dark:text-gray-400">
        Page <span className="font-semibold">{page}</span> of{" "}
        <span className="font-semibold ">{numpages.count}</span> Entries
      </span>
    );
  };

  // Memuat data anime pertama kali halaman dimuat
  useEffect(() => {
    fetchAnimeData(1); // Memuat data halaman pertama
  }, []); // Dependency array kosong agar hanya dipanggil sekali saat komponen dimuat

  // Fungsi untuk menangani klik tombol Next
  const handleNext = () => {
    fetchAnimeData(currentPage + 1);
  };

  // Fungsi untuk menangani klik tombol Prev
  const handlePrev = () => {
    if (currentPage > 1) {
      fetchAnimeData(currentPage - 1);
    }
  };

  return (
    <div>
      <Header title="Top Anime" description="terpopuler" />
      <AnimeList data={animeData} loading={loading} />

      <div className="grid grid-rows-1 md:grid-cols-3 my-4 justify-items-center">
        <div className="md:col-span-1 justify-self-start">
          {pagination(currentPage)}
        </div>
        <div className="md:col-span-2 justify-self-end flex justify-center md:justify-end">
          <div className="inline-flex">
            <button
              onClick={handlePrev}
              className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white rounded-s bg-blue-500 hover:bg-blue-700"
            >
              Prev
            </button>
            <button
              onClick={handleNext}
              className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-blue-500 border-0 border-s rounded-e hover:bg-blue-700"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;
