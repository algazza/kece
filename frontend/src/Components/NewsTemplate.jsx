import React from "react";
import { Link, useLocation } from "react-router-dom";
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
  NewsBeritaLengkap,
  NewsTanggal,
}) => {
  const location = useLocation();

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
      <main className={`${styles.paddingY} `}>
        <section
          className={`${styles.paddingY} ${styles.marginX} ${styles.flexCenter} flex-col gap-12 pt-12`}
        >
          <h5 className={`${styles.heading4} ${styles.marginX} text-center `}>
            {NewsJudul}
          </h5>

          <div>
            <img src={NewsImage} alt={NewsJudul} />
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

          <div className={`${styles.fontBody} sm:mx-32 `}>
            {NewsBeritaLengkap}

            <div className={`${styles.fontBodyBold}`}>
              <p>{NewsTanggal}</p>
              <p>Promosi Arto Moro</p>
            </div>
          </div>

          <div className="px-12">
            <div className="flex justify-between">
              <h6 className={`${styles.heading6} mb-4`}>Baca juga:</h6>
              <Link className={`${styles.heading6} mb-4 text-abuGelap`}>
                Lainnya...
              </Link>
            </div>
            <section className="grid sm:grid-cols-x550 justify-center gap-6 sm:gap-12">
              {DataBerita.slice(0, 2).map((news) => (
                <div
                  key={news.id}
                  className="grid grid-flow-col shadow-[3px_5px_9px_1px_#1e1e1e1e] rounded-xl cursor-pointer"
                >
                  <img
                    src={news.gambar}
                    alt={news.judul}
                    className="h-fit sm:w-40 rounded-l-xl"
                  />
                  <div className="p-4 flex flex-col justify-center">
                    <h6 className={`${styles.heading6} `}>{news.judul}</h6>
                    <p className="py-1 hidden sm:block">{news.ringkasan}</p>
                    <p className={`${styles.fontSmall} text-abuGelap`}>
                      {news.tanggal}
                    </p>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </section>
      </main>
      <ToastContainer />
    </>
  );
};

export default NewsTemplate;
