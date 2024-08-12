import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import NewsTemplate from "../Components/NewsTemplate";

const IsiNews = () => {
  const { id } = useParams(); // Ambil id dari URL
  const [news, setNews] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/api/news/${id}`)
      .then((response) => response.json())
      .then((data) => setNews(data))
      .catch((error) => {
        console.error("Error fetching news details:", error);
      });
  }, [id]);

  if (!news) return <p>Loading...</p>;

  return (
    <>
      <Header />
      <NewsTemplate
        NewsImage={`http://localhost:8000/image/public/news/${news.image}`}
        NewsJudul={news.judul}
        NewsBeritaLengkap={news.keterangan}
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
