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
  const currentUrl = window.location.origin + location.pathname;

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
              repeatType: "loop",
            }}
            src={loaderIcon}
            alt=""
          />

          <h1 className={`${styles.heading1}`}>Loading...</h1>
        </div>
      </div>
    );

  const handleCopyLink = () => {
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
        className={`${styles.paddingY} ${styles.marginX} grid grid-cols-x650 pt-12`}
      >
        <div className={`${styles.flexCenter} flex-col gap-12`}>
          <h5 className={`${styles.heading4} text-center `}>
            {news.judul}
          </h5>

          <div>
            <img
              className="max-w-[400px]"
              src={`http://localhost:8000/image/public/news/${news.image}`}
              alt=""
            />
            <div className="flex justify-end pt-2 gap-4">
              <a onClick={handleCopyLink}>
                <LinkIcon className="text-[#646464]" />
              </a>
              <a
                href={`whatsapp://send?text=${news.judul}. Lihatlah selengkapnya di ${currentUrl}`}
              >
                <WhatsAppIcon className="text-[#25D366]" />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${currentUrl}`}
                target="_blank"
              >
                <XIcon className="text-[#000]" />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}
                target="_blank"
              >
                <FacebookRoundedIcon className="text-[#4267B2]" />
              </a>
            </div>
          </div>

          <div className={`${styles.fontBody} `}>
            <div
              className="pb-6"
              dangerouslySetInnerHTML={{ __html: news.keterangan }}
            />

            <div className={`${styles.fontBodyBold}`}>
              <p>{news.tanggal}</p>
              <p>{news.penulis}</p>
            </div>
          </div>
        </div>

        <div className="px-12">
          <div className="flex justify-between">
            <h6 className={`${styles.heading6} mb-4`}>Baca juga:</h6>
            <Link
              to={"/berita"}
              className={`${styles.heading6} mb-4 text-abuGelap`}
            >
              Lainnya...
            </Link>
          </div>
          <section className="grid grid-cols-x150 sm:grid-cols-x250 md:grid-cols-1 justify-center gap-6 sm:gap-12">
            {newsData.slice(0, 3).map((news) => {
              return (
                <div
                  key={news.id}
                  className="md:grid md:grid-flow-col shadow-[3px_5px_9px_1px_#1e1e1e1e] rounded-xl cursor-pointer"
                  onClick={() => navigate(`/berita/${news.id}`)}
                >
                  <div className="rounded-t-xl md:rounded-l-xl md:w-40 md:h-40 overflow-hidden">
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
                    <h6 className={`${styles.heading6} `}>{news.judul}</h6>
                    <p className={`${styles.fontSmall} text-abuGelap`}>
                      {news.tanggal}
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
