"use client";
import { useState, useEffect } from "react";
import AnimeList from "@/app/components/AnimeList";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/AnimeList/Header";

const Page = ({ params: { keyword } }) => {
  const [animeData, setAnimeData] = useState([]); // State untuk menyimpan data anime
  const [currentPage, setCurrentPage] = useState(1); // State untuk melacak halaman saat ini
  const [loading, setLoading] = useState(true); // State untuk melacak status pemuatan
  const [numpages, setNumPages] = useState(true); // State untuk melacak status pemuatan

  // Fungsi untuk memuat data anime dari API
  const fetchAnimeData = async (page) => {
    setLoading(true); // Mulai pemuatan
    try {
      const response = await fetch(
        `${process.env.API_ANIME}/anime?q=${keyword}&page=${page}&limit=18`
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
      <span class="text-sm text-gray-700 dark:text-gray-400">
        Page <span class="font-semibold">{page}</span> of{" "}
        <span class="font-semibold ">{numpages.count}</span> Entries
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
      <Header title="Pencarian untuk" description={keyword} />
      <AnimeList data={animeData} loading={loading} />

      <div class="flex flex-col items-center">
        {pagination(currentPage)}
        <div class="inline-flex mt-2 xs:mt-0">
          <button
            onClick={handlePrev}
            class="flex items-center justify-center px-3 h-8 text-sm font-medium text-white rounded-s bg-blue-500 hover:bg-blue-700"
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            class="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-blue-500 border-0 border-s rounded-e hover:bg-blue-700"
          >
            Next
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;
