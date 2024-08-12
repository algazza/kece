import React, { useEffect, useState } from "react";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import NewsTemplate from "../Components/NewsTemplate";
import { useParams } from "react-router-dom";

const IsiNews = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/api/news/${id}`)
      .then((response) => response.json())
      .then((data) => setNews(data))
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }, [id]);

  if (!news) {
    return <p>Berita tidak ditemukan!</p>;
  }

  return (
    <>
      <Header />
      <NewsTemplate
        NewsImage={`http://localhost:8000/image/public/news/${news.image}`}
        NewsJudul={news.judul}
        NewsBeritaLengkap={news.keterangan}
        NewsTanggal={news.created_at}
      />
      <Footer />
    </>
  );
};

export default IsiNews;
