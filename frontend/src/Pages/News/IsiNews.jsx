import React, { useEffect, useState } from "react";
import styles from "../../helper/style";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LinkIcon from "@mui/icons-material/Link";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import XIcon from "@mui/icons-material/X";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { loaderIcon } from "../../helper";

const IsiNews = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [error, setError] = useState(null);
  const [newsData, setNewsData] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8000/api/news")
      .then((response) => response.json())
      .then((data) => {
        setNewsData(data);
      })
      .catch((err) => {
        toast.error("Gagal Memunculkan News!");
      });
  }, []);

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
          const data = JSON.parse(text);
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

  if (!news)
    return (
      <div className="w-screen h-dvh flex justify-center items-center">
        <div className="">
          <motion.img
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "loop"
            }}
            src={loaderIcon}
            alt=""
          />

          <h1 className={`${styles.heading1}`}>Loading...</h1>
        </div>
      </div>
    );

  const handleCopyLink = () => {
    const currentUrl = window.location.origin + location.pathname;
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        toast.success("Link berhasil disalin!");
      })
      .catch((err) => {
        toast.error("Gagal menyalin link!");
      });
  };

  return (
    <>
      <section
        className={`${styles.paddingY} ${styles.marginX} ${styles.flexCenter} flex-col gap-12 pt-12`}
      >
        <h5 className={`${styles.heading4} ${styles.marginX} text-center `}>
          {news.judul}
        </h5>

        <div>
          <img
            className="max-w-[400px]"
            src={`http://localhost:8000/image/public/news/${news.image}`}
            alt=""
          />
          <div className="flex justify-end pt-2 gap-4">
            <button onClick={handleCopyLink}>
              <LinkIcon className="text-[#646464]" />
            </button>
            <button>
              <WhatsAppIcon className="text-[#25D366]" />
            </button>
            <button>
              <XIcon className="text-[#000]" />
            </button>
            <button>
              <FacebookRoundedIcon className="text-[#4267B2]" />
            </button>
          </div>
        </div>

        <div className={`${styles.fontBody} sm:mx-32`}>
          <div
            className="pb-6"
            dangerouslySetInnerHTML={{ __html: news.keterangan }}
          />

          <div className={`${styles.fontBodyBold}`}>
            <p>
              {news.tanggal}
            </p>
            <p>{news.penulis}</p>
          </div>
        </div>

        <div className="px-12">
          <div className="flex justify-between">
            <h6 className={`${styles.heading6} mb-4`}>Baca juga:</h6>
            <Link
              to={"/news"}
              className={`${styles.heading6} mb-4 text-abuGelap`}
            >
              Lainnya...
            </Link>
          </div>
          <section className="grid sm:grid-cols-x550 justify-center gap-6 sm:gap-12">
            {newsData.slice(0, 2).map((news) => {
              return (
                <div
                  key={news.id}
                  className="grid grid-flow-col shadow-[3px_5px_9px_1px_#1e1e1e1e] rounded-xl cursor-pointer"
                  onClick={() => navigate(`/berita/${news.id}`)}
                >
                  <div className="rounded-l-xl w-32 h-32 sm:w-40 sm:h-40 overflow-hidden">
                    <img
                      src={`http://localhost:8000/image/public/news/${news.image}`}
                      alt={news.judul}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div className="p-4 flex flex-col justify-center">
                    <p className={`${styles.fontSmallBold} text-merahh-500`}>
                      {news.kategory}
                    </p>
                    <h6 className={`${styles.heading6}`}>{news.judul}</h6>
                    <p className={`${styles.fontSmall} text-abuGelap`}>
                      {news.created_at
                        ? new Intl.DateTimeFormat("id-ID", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                          }).format(new Date(news.created_at))
                        : "Tanggal tidak tersedia"}
                    </p>
                  </div>
                </div>
              );
            })}
          </section>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default IsiNews;
