// ----- Folder Data -----
import { footer1, footer2, headerLayanan, headerProduk, headerTentangKami, logoArmor } from "../helper/index";
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
  { icon: <YouTubeIcon />, link: "https://www.youtube.com/c/BPRARTOMORO" },
  { icon: <InstagramIcon />, link: "https://www.instagram.com/bpr_artomoro/" },
  {
    icon: <FacebookRoundedIcon />,
    link: "https://www.facebook.com/bprartomorosmg",
  },
  {
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/bpr-arto-moro-4a361a24a/",
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

      <div className="bg-biruMuda-700 text-white">
        <div className="py-8 flex gap-12 flex-col md:flex-row justify-center">
          <div className="gap-2 flex flex-col">
            <a href="/" className="flex items-center gap-2 ">
              <img src={logoArmor} alt="logo" className="" />
              <span className="font-bold">BPR ARTO MORO</span>
            </a>
            <p>
              <span>024-674 7220</span> | <span>024-7660 6993</span>
            </p>
            <p>
              <span>024-674 7220</span> | <span>024-7660 6993</span>
            </p>
            <p>
              <span>info@bprartomoro.co.ic</span>
            </p>
            <ul className="flex gap-4 text-primary">
              {sosmedIcon.map((sosmed, index) => (
                <li key={index}>
                  <a href={sosmed.link} className="">
                    {sosmed.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <ul className="">
            <h2 className="font-bold">Kantor Pusat:</h2>
            <li>Jl. Elang Raya No. 99 Mangunharjo, Tembalang, Semarang</li>

            <h2 className="font-bold mt-4">Kantor Kas:</h2>
            <li>Jl. Gajah Raya No. 155, Semarang</li>
            <li>Jl. Untung Suropati No. 18 Kav.5, Kalipancur, Semarang</li>
            <li>Jl. Kol.H.Imam Suprapto No.1 Bulusan, Tembalang, Semarang</li>
          </ul>

          <div className="flex gap-8">
            <ul>
              <h2 className="font-bold">Produk</h2>
              {headerProduk.map((produk) => (
                <li key={produk.title} className="py-1">
                  <Link to={produk.link} >
                    {produk.title}
                  </Link>
                </li>
              ))}
            </ul>
            <ul>
              <h2 className="font-bold">Layanan</h2>
              {headerLayanan.map((layanan) => (
                <li key={layanan.title} className="py-1">
                <Link to={layanan.link} >
                  {layanan.title}
                </Link>
              </li>
              ))}
            </ul>
            <ul>
              <h2 className="font-bold">Tentang Kami</h2>
              {headerTentangKami.map((kami) => (
                <li key={kami.title} className="py-1">
                <Link to={kami.link} >
                  {kami.title}
                </Link>
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

      {/*<div className="flex flex-col md:flex-row justify-between bg-footerimage bg-no-repeat">*/}
      {/*  <div className="flex flex-col py-4 pl-8 pr-12 xs:py-2 xs:px-8 gap-2 xs:gap-2 text-white">*/}
      {/*    <a href="/" className="flex items-center gap-3">*/}
      {/*      <img src={logoArmor} alt="logo" className="xs:w-16" />*/}
      {/*      <span*/}
      {/*        className={`${styles.heading5} xs:leading-[24px] leading-[20px]`}*/}
      {/*      >*/}
      {/*        BPR ARTO MORO*/}
      {/*      </span>*/}
      {/*    </a>*/}
      {/*    <p className={`${styles.fontSmall} pr-4`}>*/}
      {/*      Office : Jl. Elang Raya No. 99 Mangunharjo, Tembalang, Semarang*/}
      {/*    </p>*/}
      {/*    <ul className={`${styles.fontSmall} pr-4 list-disc list-inside`}>*/}
      {/*      {" "}*/}
      {/*      Kantor Kas:*/}
      {/*      <li> Jl Gajah Raya No. 155 Sambirejo</li>*/}
      {/*      <li>Jl. Untung Suropati No. 18 Kav 5</li>*/}
      {/*      <li> Jl. H. Imam Suprapto No. 1 Bulusan</li>*/}
      {/*    </ul>*/}
      {/*  </div>*/}

      {/*  <div className="grid grid-cols-2 gap-2 mt-4 xs:mt-12 md:mt-0 px-5 md:px-0">*/}
      {/*    <div className="mr-8">*/}
      {/*      <h4 className={`${styles.heading5}`}>Informasi Perusahaan</h4>*/}
      {/*      <ul>*/}
      {/*        {footer1.map((futer) => (*/}
      {/*          <li key={futer.id} className="">*/}
      {/*            <a href={futer.link} className={`${styles.fontBody}`}>*/}
      {/*              {futer.title}*/}
      {/*            </a>*/}
      {/*          </li>*/}
      {/*        ))}*/}
      {/*      </ul>*/}
      {/*    </div>*/}

      {/*    <div className="">*/}
      {/*      <h4 className={`${styles.heading5}`}>Informasi Perusahaan</h4>*/}
      {/*      <ul>*/}
      {/*        {footer2.map((futer) => (*/}
      {/*          <li key={futer.id} className="">*/}
      {/*            <a*/}
      {/*              href={futer.link}*/}
      {/*              target={futer.id == 2 && "_blank"}*/}
      {/*              className={`${styles.fontBody}`}*/}
      {/*            >*/}
      {/*              {futer.title}*/}
      {/*            </a>*/}
      {/*          </li>*/}
      {/*        ))}*/}
      {/*      </ul>*/}
      {/*    </div>*/}

      {/*    <div className="grid justify-center col-span-2 ">*/}
      {/*      <h4 className={`${styles.heading5} text-center`}>*/}
      {/*        Kunjungi Sosial Media*/}
      {/*      </h4>*/}
      {/*      <ul className="flex justify-around mt-2">*/}
      {/*        {sosmedIcon.map((sosmed, index) => (*/}
      {/*          <li*/}
      {/*            key={index}*/}
      {/*            className="w-12 h-12 rounded-full bg-merahh-500 text-center text-primary flex justify-center items-center pb-[0.2rem]"*/}
      {/*          >*/}
      {/*            <a href={sosmed.link} className="">*/}
      {/*              {sosmed.icon}*/}
      {/*            </a>*/}
      {/*          </li>*/}
      {/*        ))}*/}
      {/*      </ul>*/}
      {/*      <div className="m-2 gap-4 flex flex-row"></div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/*<div className="bg-biruMuda-500 flex md:flex-row flex-col md:justify-between items-center py-4 md:px-8 gap-4 mt-4">*/}
      {/*  <ul className="flex gap-4 text-primary">*/}
      {/*    {sosmedIcon.map((sosmed, index) => (*/}
      {/*      <li key={index}>*/}
      {/*        <a href={sosmed.link} className="">*/}
      {/*          {sosmed.icon}*/}
      {/*        </a>*/}
      {/*      </li>*/}
      {/*    ))}*/}
      {/*  </ul>*/}

      {/*  <div className="flex gap-4 text-primary">*/}
      {/*    <p className="">info@bprartomoro.co.id</p>*/}
      {/*    <p className="">0813 2789 0199</p>*/}
      {/*  </div>*/}

      {/*  <span className={`text-primary ${styles.fontSmall} `}>*/}
      {/*    &#169; 2024 Bank BPR Arto Moro All rights reserved.*/}
      {/*  </span>*/}
      {/*</div>*/}
    </footer>
  );
};

export default Footer;
