import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LinkIcon from "@mui/icons-material/Link";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import XIcon from "@mui/icons-material/X";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import styles from "../data/style";

const NewsTemplate = ({
  NewsJudul,
  NewsImage,
  NewsBeritaLengkap, // HTML content
  NewsTanggal,
  NewsPenulis,
}) => {
  const [newsData, setNewsData] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8000/api/news")
      .then(response => response.json())
      .then(data => {
        setNewsData(data);
      })
      .catch(error => {
        console.error("Error fetching news data:", error);
      });
  }, []);

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
      <main className={`${styles.paddingY}`}>
        <section
          className={`${styles.paddingY} ${styles.marginX} ${styles.flexCenter} flex-col gap-12 pt-12`}
        >
          <h5 className={`${styles.heading4} ${styles.marginX} text-center `}>
            {NewsJudul}
          </h5>

          <div>
            <img className="max-w-[800px]" src={NewsImage} alt="" />
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
            <div className="pb-6" dangerouslySetInnerHTML={{ __html: NewsBeritaLengkap }} />

            <div className={`${styles.fontBodyBold}`}>
              <p>{NewsTanggal}</p>
              <p>{NewsPenulis}</p>
            </div>
          </div>

          <div className="px-12">
            <div className="flex justify-between">
              <h6 className={`${styles.heading6} mb-4`}>Baca juga:</h6>
              <Link to={"/news"} className={`${styles.heading6} mb-4 text-abuGelap`}>
                Lainnya...
              </Link>
            </div>
            <section className="grid sm:grid-cols-x550 justify-center gap-6 sm:gap-12">
              {newsData.slice(0, 2).map((news) => {
                console.log('News Data:', news); 
                console.log('Created At:', news.created_at); 
                return (
                  <div
                    key={news.id}
                    className="grid grid-flow-col shadow-[3px_5px_9px_1px_#1e1e1e1e] rounded-xl cursor-pointer"
                    onClick={() => navigate(`/news/${news.id}`)}
                  >
                    <div className="rounded-l-xl w-32 h-32 sm:w-40 sm:h-40 overflow-hidden">
                      <img
                        src={`http://localhost:8000/image/public/news/${news.image}`}
                        alt={news.judul}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    <div className="p-4 flex flex-col justify-center">
                      <p className={`${styles.fontSmallBold} text-merahh`}>{news.kategory}</p>
                      <h6 className={`${styles.heading6}`}>{news.judul}</h6>
                      <p className={`${styles.fontSmall} text-abuGelap`}>
                        {news.created_at
                          ? new Intl.DateTimeFormat('id-ID', {
                              day: '2-digit',
                              month: '2-digit',
                              year: 'numeric',
                            }).format(new Date(news.created_at))
                          : 'Tanggal tidak tersedia'}
                      </p>
                    </div>
                  </div>
                );
              })}
            </section>
          </div>
        </section>
      </main>
      <ToastContainer />
    </>
  );
};

export default NewsTemplate;
