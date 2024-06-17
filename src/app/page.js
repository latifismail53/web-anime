"use client";
import { useState, useEffect } from "react";
import AnimeList from "./components/AnimeList";
import WatchPopuler from "./components/AnimeList/WatchPopuler";
import Header from "./components/AnimeList/Header"; // Pastikan path yang benar untuk Header
import Pagination from "./components/AnimeList/Pagination"; // Impor komponen Pagination
import Skeleton from "react-loading-skeleton";
import Jumbotron from "./components/Jumbotron";

const Page = () => {
  const [animeData, setAnimeData] = useState([]); // State untuk menyimpan data anime
  const [popularData, setPopularData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // State untuk melacak halaman saat ini
  const [loading, setLoading] = useState(true); // State untuk melacak status pemuatan
  const [numPages, setNumPages] = useState(1); // State untuk jumlah halaman

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
      setNumPages(data.pagination.items.count || 1);
    } catch (error) {
      console.error("Error fetching anime data:", error);
      setAnimeData([]); // Set to empty array on error
    } finally {
      setLoading(false); // Selesai pemuatan
    }
  };

  const popularEps = async (page) => {
    setLoading(true); // Mulai pemuatan
    try {
      const response = await fetch(
        `${process.env.API_ANIME}/watch/episodes/popular?page=${page}&limit=6`
      );
      const peps = await response.json();
      setPopularData(peps.data || []);
    } catch (error) {
      console.error("Error fetching anime data:", error);
      setPopularData([]); // Set to empty array on error
    } finally {
      setLoading(false); // Selesai pemuatan
    }
  };

  // Memuat data anime pertama kali halaman dimuat
  useEffect(() => {
    fetchAnimeData(1); // Memuat data halaman pertama
    popularEps(1);
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
      <Jumbotron />

      <Header title="Top Anime" description="terpopuler" />
      {loading && (
        <div className="md:w-auto m-5 lg:w-full rounded-lg">
          <Skeleton height={362} className="rounded-t-lg" />
          <div className="mt-4">
            <Skeleton width="80%" className="mb-4" />
            <Skeleton width="60%" className="mb-4" />
            <Skeleton width="30%" />
          </div>
        </div>
      )}
      <AnimeList data={animeData} loading={loading} />
      <Pagination
        currentPage={currentPage}
        numPages={numPages}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />

      {/* Watch anime terpopuler WatchPopularEpisodes */}

      <Header title="Episode" description="terpopuler" />
      {loading && (
        <div className="md:w-auto m-5 lg:w-full rounded-lg">
          <Skeleton height={362} className="rounded-t-lg" />
          <div className="mt-4">
            <Skeleton width="80%" className="mb-4" />
            <Skeleton width="60%" className="mb-4" />
            <Skeleton width="30%" />
          </div>
        </div>
      )}
      <WatchPopuler data={popularData} loading={loading} />
    </div>
  );
};

export default Page;
