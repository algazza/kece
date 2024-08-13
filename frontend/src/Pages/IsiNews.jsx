import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import NewsTemplate from "../Components/NewsTemplate";

const IsiNews = () => {
  const { id } = useParams(); // Ambil id dari URL
  const [news, setNews] = useState(null);
  const [error, setError] = useState(null); 

  useEffect(() => {
    console.log("Fetching news for ID:", id);
    fetch(`http://localhost:8000/api/news/${id}`)
      .then((response) => {
        console.log("Response status:", response.status);
        if (response.status === 404) {
          throw new Error("Berita tidak ditemukan.");
        }
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text(); 
      })
      .then((text) => {
        try {
          const data = JSON.parse(text); // Parse teks menjadi JSON
          console.log("Fetched news data:", data);
          setNews(data);
        } catch (error) {
          setError("Data tidak dalam format JSON.");
          console.error("Error parsing JSON:", error);
        }
      })
      .catch((error) => {
        setError(error.message);
        console.error("Error fetching news details:", error);
      });
  }, [id]);

  if (error) return <p>{error}</p>; // Tampilkan pesan kesalahan jika ada

  if (!news) return <p>Loading...</p>;

  return (
    <>
      <Header />
      <NewsTemplate
        NewsImage={`http://localhost:8000/image/public/news/${news.image}`}
        NewsJudul={news.judul}
        NewsBeritaLengkap={news.keterangan}
        NewsPenulis={news.penulis}
        NewsTanggal={new Intl.DateTimeFormat("id-ID", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }).format(new Date(news.created_at))}
      />
      <Footer />
    </>
  );
};

export default IsiNews;
