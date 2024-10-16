// ----- Folder Data -----
import {
  footer1,
  footer2,
  headerLayanan,
  headerProduk,
  headerTentangKami,
  logoArmor,
} from "../helper/index";
import styles from "../helper/style";
// ----- MUI -----
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
// ----- Router DOM -----
import { Link } from "react-router-dom";
// ----- Framer Motion -----
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { localhostLink } from "../helper/localhost";

const sosmedIcon = [
  {
    icon: <YouTubeIcon />,
    link: "https://www.youtube.com/c/BPRARTOMORO",
    color: "#FF0000",
  },
  {
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/bpr_artomoro/",
    color: "#e1306c",
  },
  {
    icon: <FacebookRoundedIcon />,
    link: "https://www.facebook.com/bprartomorosmg",
    color: "#4267B2",
  },
  {
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/bpr-arto-moro-4a361a24a/",
    color: "#0077b5"
  },
  // { icon: <img src={TiktokIcon} className="w-[24px]"/>, link: "https://www.linkedin.com/in/bpr-arto-moro-4a361a24a/"},
];

const Footer = () => {
  const [marqueeImage, setMarqueeImage] = useState([]);

  useEffect(() => {
    fetch(`${localhostLink}/api/stackholder`)
      .then((response) => response.json())
      .then((data) => setMarqueeImage(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <footer className="mt-8 bg-biruMuda-100 shadow-[inset_0px_0px_164px_116px_#fcfffe]">
      <div className={`${styles.paddingY} border-t-2 border-abuGelap`}>
        <h3 className={`${styles.heading3} text-center mb-10`}>Mitra Kami</h3>

        <div className={`overflow-hidden flex`}>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="flex flex-shrink-0"
          >
            {marqueeImage.map((img) => (
              <img
                src={`${localhostLink}/image/public/stackholder/${img.image}`}
                key={img.id}
                alt={`stackholder ${img.id}`}
                className="pr-20"
              />
            ))}
          </motion.div>

          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="flex flex-shrink-0"
          >
            {marqueeImage.map((img) => (
              <img
                src={`${localhostLink}/image/public/stackholder/${img.image}`}
                key={img.id}
                alt={`stackholder ${img.id}`}
                className="pr-20"
              />
            ))}
          </motion.div>
        </div>
      </div>

      <div className={`bg-biruMuda-700 text-white ${styles.fontSmall}`}>
        <div className="py-6 flex gap-12 flex-col md:flex-row justify-between px-8">
          <div className="gap-4 flex flex-col">
            <a href="/" className="flex items-center gap-2 ">
              <img src={logoArmor} alt="logo" className="w-[3rem]" />
              <span className={styles.heading6}>BPR ARTO MORO</span>
            </a>
            <p className={`w-[20rem] ${styles.fontBody}`}>
              PT Bank Arto Moro berizin dan diawasi oleh Otoritas Jasa Keuangan
              (OJK), Bank Indonesia (BI) dan merupakan peserta penjaminan LPS.
            </p>
            <div>
              <h2 className={styles.fontBodyBold}>Hubungi Kami:</h2>
              <p className="py-1">
                <span>024-674 7220</span> | <span>024-7660 6993</span>
              </p>
              <p>
                <span>info@bprartomoro.co.ic</span>
              </p>
            </div>
          </div>

          <ul className="">
            <h2 className={styles.fontBodyBold}>Kantor Pusat:</h2>
            <li>Jl. Elang Raya No. 99 Mangunharjo, Tembalang, Semarang</li>

            <h2 className={`${styles.fontBodyBold} mt-4`}>Kantor Kas:</h2>
            <li>Jl. Gajah Raya No. 155, Semarang</li>
            <li>Jl. Untung Suropati No. 18 Kav.5, Kalipancur, Semarang</li>
            <li>Jl. Kol.H.Imam Suprapto No.1 Bulusan, Tembalang, Semarang</li>

            <div className="mt-4">
              <h2 className={styles.fontBodyBold}>Sosial Media Kami</h2>
              <ul className="flex gap-1 py-1">
                {sosmedIcon.map((sosmed, index) => (
                  <li key={index} className={`${styles.flexCenter} text-center pb-[0.2rem]`}>
                    <a
                      href={sosmed.link}
                      className="text-primary duration-300 hover:bg-primary p-1 rounded-full "
                      style={{ color: 'inherit' }} // Memastikan warna saat normal
                      onMouseEnter={(e) => (e.currentTarget.style.color = sosmed.color)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'inherit')}
                    >
                      {sosmed.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </ul>

          <div className="flex gap-8">
            <ul>
              <h2 className={styles.fontBodyBold}>Produk</h2>
              {headerProduk.map((produk) => (
                <li key={produk.title} className="py-1">
                  <Link to={produk.link} className="hover:font-semibold duration-300">{produk.title}</Link>
                </li>
              ))}
            </ul>
            <ul>
              <h2 className={styles.fontBodyBold}>Layanan</h2>
              {headerLayanan.map((layanan) => (
                <li key={layanan.title} className="py-1">
                  <Link to={layanan.link} className="hover:font-semibold duration-300">{layanan.title}</Link>
                </li>
              ))}
            </ul>
            <ul>
              <h2 className={styles.fontBodyBold}>Tentang Kami</h2>
              {headerTentangKami.map((kami) => (
                <li key={kami.title} className="py-1">
                  <Link to={kami.link} className="hover:font-semibold duration-300">{kami.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-primary border-t-[1px] py-4 text-center">
          <span className={`text-primary ${styles.fontSmall} `}>
            &#169; 2024 Bank BPR Arto Moro All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
