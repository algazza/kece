import React, { useEffect, useState } from "react";
import styles from "../../helper/style";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { localhostLink } from "../../helper/localhost";
import { toast, ToastContainer } from "react-toastify";
import Error from "../Error";
import { motion } from "framer-motion";
import { loaderIcon } from "../../helper";
import LinkIcon from "@mui/icons-material/Link";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import XIcon from "@mui/icons-material/X";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";

const IsiPromo = () => {
  const { slug } = useParams();
  const [promo, setPromo] = useState(null);
  const [error, setError] = useState(null);
  const [promoData, setPromoData] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const currentUrl = window.location.origin + location.pathname;

  useEffect(() => {
    fetch(`${localhostLink}/api/promo`)
      .then((response) => response.json())
      .then((data) => setPromoData(data))
      .catch(() => {
        toast.error("Gagal Memunculkan berita!");
      });
  }, []);

  useEffect(() => {
    fetch(`${localhostLink}/api/promo/${slug}`)
      .then((response) => {
        if (response.status === 404) {
          setNotFound(true);
          throw new Response("Halaman tidak ditemukan.", { status: 404 });
        }
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
      })
      .then((text) => {
        try {
          const data = JSON.parse(text);
          setPromo(data);
        } catch (error) {
          setError("Data tidak dalam format JSON.");
          console.error("Error parsing JSON:", error);
        }
      })
      .catch((error) => {
        setError(error.message);
        console.error("Error fetching promo details:", error);
      });
  }, [slug]);

  if (notFound) {
    return <Error message="Halaman tidak ditemukan" status={404} />;
  }

  if (error) {
    return <Error message={error} />;
  }

  if (!promo)
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
        toast.success("Link berhasil disalin");
      })
      .catch(() => {
        toast.error("Gagal menyalin link");
      });
  };

  return (
    <>
      <section
        className={`${styles.paddingY} ${styles.marginX} grid md:grid-cols-x650 pt-12`}
      >
        <div className={`${styles.flexCenter} flex-col gap-12`}>
          <h5 className={`${styles.heading4} text-center`}>{promo.judul}</h5>

          <div>
            <img
              src={`${localhostLink}/image/public/promo/${promo.image}`}
              alt={promo.judul}
              className="max-w-[400px]"
            />
            
            <div className="flex justify-end pt-2 gap-4">
              <a onClick={handleCopyLink} className="cursor-pointer">
                <LinkIcon className="text-[#646464]" />
              </a>
              <a
                href={`whatsapp://send?text=${promo.judul}. Lihatlah selengkapnya di ${currentUrl}`}
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
              dangerouslySetInnerHTML={{ __html: promo.keterangan }}
            />

            <div className={`${styles.fontBodyBold}`}>
              <p>{promo.tanggal}</p>
            </div>
          </div>
        </div>

        <div className="px-12">
          <div className="flex justify-between">
            <h6 className={`${styles.heading6} mb-4`}>Baca juga:</h6>
            <Link
              to={"/promo"}
              className={`${styles.heading6} mb-4 text-abuGelap`}
            >
              Lainnya...
            </Link>
          </div>
          <section className="grid grid-cols-x150 sm:grid-cols-x250 md:grid-cols-1 justify-center gap-6 sm:gap-12">
            {promoData.slice(0, 4).map((promo, index) => {
              return (
                <div
                  key={index}
                  className="p-4 border-2 rounded-md grid gap-2 justify-center cursor-pointer"
                  onClick={() => navigate(`/promo/${promo.slug}`)}
                >
                  <div className="w-60 h-60 overflow-hidden">
                    <img
                      src={`${localhostLink}/image/public/promo/${promo.image}`}
                      alt={promo.judul}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className={`${styles.heading6} text-center`}>
                    {promo.judul}
                  </h2>
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

export default IsiPromo;
