import React from "react";
import { Link, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LinkIcon from "@mui/icons-material/Link";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import XIcon from "@mui/icons-material/X";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import styles from "../data/style";
import { sampleNews } from "../data";

const NewsTemplate = ({
  NewsJudul,
  NewsImage,
  NewsBeritaLengkap, // HTML content
  NewsTanggal,
  NewsPenulis,
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
            </section>
          </div>
        </section>
      </main>
      <ToastContainer />
    </>
  );
};

export default NewsTemplate;
