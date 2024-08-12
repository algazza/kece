import React from "react";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import NewsTemplate from "../Components/NewsTemplate";
import { DataBerita } from "../data/user";
import { useParams } from "react-router-dom";

const IsiNews = () => {
  const { id } = useParams;
  const showNews = DataBerita.find((item) => item.id === parseInt(id)); // Cari berita berdasarkan id

  if (!showNews) {
    return <p>Berita tidak ditemukan!</p>;
  }

  return (
    <>
      <Header />
      <NewsTemplate
        NewsImage={`http://localhost:8000/image/public/news/${news.image}`}
        NewsJudul={news.judul}
        NewsBeritaLengkap={news.isiBerita}
        NewsTanggal={news.created_at}
      />
      <Footer />
    </>
  );
};

export default IsiNews;
