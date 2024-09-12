import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import styles from "../helper/style";
import ImageBanner from "../Layouts/ImageBanner";
import {
  Banneremyu,
  BennerLiv,
  ImageSimulasi,
  nunezimg,
  phoneimg,
  sampleBanner,
  SimulasiPercil1,
  SimulasiPercil2,
  SimulasiPercil3,
  SimulasiPercil4,
  ThumbnailYoutube,
} from "../helper";
// ==================== ICON ===========================
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import HomeIcon from "@mui/icons-material/Home";
import DiscountIcon from "@mui/icons-material/Discount";
import CalculateIcon from "@mui/icons-material/Calculate";
import PercentIcon from "@mui/icons-material/Percent";
import MovingIcon from "@mui/icons-material/Moving";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupsIcon from "@mui/icons-material/Groups";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import SimulasiCalcKredit from "../Components/Simulasi/SimulasiCalcKredit";
import SimulasiCalcDeposito from "../Components/Simulasi/SimulasiCalcDeposito";
import SimulasiCalcTabungan from "../Components/Simulasi/SimulasiCalcTabungan";
import RateBunga from "../Components/RateBunga";
import { localhostLink } from "../helper/localhost";

const menuHome = [
  {
    id: 1,
    icon: (className) => <AccountBalanceIcon className={className} />,
    title: "Kredit",
    link: "kredit",
  },
  {
    id: 2,
    icon: (className) => <MonetizationOnIcon className={className} />,
    title: "Deposito",
    link: "deposito",
  },
  {
    id: 3,
    icon: (className) => <AccountBalanceWalletIcon className={className} />,
    title: "Tabungan",
    link: "tabungan",
  },
  {
    id: 4,
    icon: (className) => <PercentIcon className={className} />,
    title: "Rate Bunga",
    link: "",
  },
  {
    id: 5,
    icon: (className) => <LocalShippingIcon className={className} />,
    title: "Mobil Kas",
    link: "",
  },
  {
    id: 6,
    icon: (className) => <DirectionsCarIcon className={className} />,
    title: "Pickup",
    link: "pick-up-service",
  },
  {
    id: 7,
    icon: (className) => <HomeIcon className={className} />,
    title: "Properti",
    link: "armor-prop",
  },
  {
    id: 8,
    icon: (className) => <DiscountIcon className={className} />,
    title: "Promo",
    link: "",
  },
  {
    id: 9,
    icon: (className) => <CalculateIcon className={className} />,
    title: "Simulasi",
    link: "#simulasi",
  },
  {
    id: 10,
    icon: (className) => <LocationOnIcon className={className} />,
    title: "Location",
    link: "lokasi",
  },
];

const penghargaanHome = [
  {
    icon: (className, sx) => <MovingIcon sx={sx} className={className} />,
    title: "Terbesar Dikota Semarang",
    description: "BPR Terbesar Nomer 3 di Kota Semarang.",
  },
  {
    icon: (className, sx) => <EmojiEventsIcon sx={sx} className={className} />,
    title: "Memiliki 6 penghargaan",
    description: "Top 100 BPR 2023 versi majalah The Finance.",
  },
  {
    icon: (className, sx) => <AutoAwesomeIcon sx={sx} className={className} />,
    title: "Berkomitmen Untuk Terus Berinovasi",
    description:
      "Terus berinovasi sesuai dengan perkembangan jaman untuk memenuhi kebutuhan nasabah.",
  },
  {
    icon: (className, sx) => <LocalAtmIcon sx={sx} className={className} />,
    title: "Memiliki Bunga Yang Rendah",
    description: "Dengan bunga yang ringan dapat menunjang usaha anda.",
  },
  {
    icon: (className, sx) => <GroupsIcon sx={sx} className={className} />,
    title: "Memberikan Layanan yang Terbaik",
    description:
      "BPR Arto Moro selalu memberikan pelayanan yang terbaik untuk nasasbah.",
  },
];

const Home = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openRateBunga, setOpenRateBunga] = useState(false);
  const [images, setImages] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [menuCalc, setMenuCalc] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${localhostLink}/api/banner`)
      .then((response) => response.json())
      .then((data) => {
        const imageUrls = data.map(
          (item) => `${localhostLink}/image/public/banner/${item.image}`
        );
        setImages(imageUrls);
      })
      .catch((error) => {
        console.error("Error fetching banner images:", error);
      });

    fetch(`${localhostLink}/api/news`)
      .then((response) => response.json())
      .then((data) => {
        setNewsData(data);
      })
      .catch((err) => {
        toast.error("Gagal Memunculkan Berita!");
      });
  }, []);

  useEffect(() => {
    if (openModal || openRateBunga) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [openModal, openRateBunga]);

  const handleOpen = () => {
    setOpenMenu(!openMenu);
  };

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const handleOpenRateBunga = () => {
    setOpenRateBunga(!openRateBunga);
  };

  const handlemenuCalc = (id) => {
    setMenuCalc(id);
  };

  const handleAccordion = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <section className="pb-6">
        <div className="rounded-br-[100px] sm:rounded-br-[200px] md:rounded-br-[300px] overflow-hidden">
          <ImageBanner images={images} />
        </div>

        <div className={`${styles.flexStart} py-4 sm:px-8 sm:gap-8 gap-2`}>
          <motion.div
            className={`grid md:grid-cols-x5170 grid-cols-3 gap-x-2 gap-y-8 sm:gap-8 justify-center p-4 rounded-lg border-b-4 border-abu `}
            initial={{ height: "5.5rem", overflow: "hidden" }}
            animate={{ height: openMenu ? "auto" : "5.9rem" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {menuHome.map((menu) => (
              <Link
                to={menu.link}
                onClick={
                  menu.title === "Rate Bunga" && (() => handleOpenRateBunga())
                }
                key={menu.id}
                className="group bg-abuTerang grid justify-items-center py-2 sm:px-6 px-3 rounded-xl transition-all duration-300 ease-in-out"
              >
                {menu.icon("text-abuGelap group-hover:text-merahh-500 ")}
                <h2 className={`${styles.fontBodyBold} flex-shrink-0 `}>
                  {menu.title}
                </h2>
              </Link>
            ))}
          </motion.div>

          <div className="w-10 cursor-pointer" onClick={handleOpen}>
            <div className="bg-abuTerang rounded-xl p-2">
              {openMenu ? <RemoveIcon /> : <AddIcon />}
            </div>
          </div>
        </div>

        <AnimatePresence>
          {openRateBunga && (
            <RateBunga handleOpenRateBunga={handleOpenRateBunga} />
          )}
        </AnimatePresence>
      </section>

      <section className={`${styles.marginX} ${styles.paddingY}`}>
        <div className="grid md:grid-flow-col">
          <div className="sm:mb-16">
            <h4 className={`${styles.heading3}`}>
              Mengapa Memilih <span className="text-red-600">BPR ARTOMORO</span>
            </h4>
            <p className="max-w-lg mt-4">
              BPR Arto Moro adalah BPR kategori SEHAT dengan visi & misi menjadi
              yang TERBESAR & TERBAIK di kota Semarang. Pada usia yang masih
              relatif Muda, saat ini posisi BPR Arto Moro adalah 3 Besar di Kota
              Semarang.
            </p>
          </div>

          <div className="grid justify-center relative">
            <img src={phoneimg} alt="" className="w-[260px]" />
            <div className="absolute z-[-1] w-[30rem] h-[30rem] rounded-full blue__gradient" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          {penghargaanHome.map((award, index) => (
            <div
              key={index}
              className={`flex items-center ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              {award.icon("m-4 text-purple-800 text-5xl", {
                fontSize: "3.5rem",
              })}
              <div>
                <h5 className={`${styles.heading5}`}>{award.title}</h5>
                <p className={`${styles.fontBody}`}>{award.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <span className="-mt-[100px] pb-[100px] block" id="simulasi">
        &nbsp;
      </span>

      <section
        className={`${styles.paddingY} ${styles.paddingX} md:grid md:grid-cols-2 bg-biruMuda-100 relative`}
      >
        <div className="hidden md:block">
          <img src={ImageSimulasi} alt="" />
        </div>

        <img
          src={SimulasiPercil1}
          alt=""
          className="absolute md:top-[240px] md:left-[130px] max-md:bottom-[70px] max-md:-right-[57px] w-[100px]"
        />
        <img
          src={SimulasiPercil2}
          alt=""
          className="absolute md:top-[100px] md:left-[200px] top-[32px] max-md:right-[0px] w-[80px]"
        />
        <img
          src={SimulasiPercil3}
          alt=""
          className="absolute md:top-[50px] md:left-[480px] top-[120px] -left-[51px]"
        />
        <img
          src={SimulasiPercil4}
          alt=""
          className="absolute md:top-[260px] md:left-[520px] max-md:hidden"
        />

        <div>
          <h2 className={`${styles.heading4} mb-4`}>
            <span className="text-biruMuda-500">Simulasi Hitung</span> Tabungan,
            Kredit, dan Deposito
          </h2>

          <div className="flex justify-between bg-primary mb-8 rounded-xl p-2 overflow-x-auto">
            {["Deposito", "Tabungan", "Kredit"].map((simulasi, index) => (
              <div
                key={index}
                className={`${
                  menuCalc == index && "bg-biruMuda-200"
                } px-6 sm:px-12 py-2 font-semibold rounded-xl cursor-pointer`}
                onClick={() => handlemenuCalc(index)}
              >
                {simulasi}
              </div>
            ))}
          </div>

          {menuCalc === 0 && <SimulasiCalcDeposito />}
          {menuCalc === 1 && <SimulasiCalcTabungan />}
          {menuCalc === 2 && <SimulasiCalcKredit />}
        </div>
      </section>

      <section className={`${styles.paddingY} ${styles.paddingX}`}>
        <h2 className={`${styles.heading3}  text-center mb-12`}>
          Moment Arto Moro
        </h2>
        <div className={`${styles.flexCenter}`}>
          <img
            src={ThumbnailYoutube}
            alt=""
            className="cursor-pointer "
            onClick={handleModal}
          />
        </div>

        {openModal && (
          <div className="w-screen h-dvh top-0 left-0 bottom-0 right-0 fixed z-40">
            <div
              className="w-screen h-dvh top-0 left-0 bottom-0 right-0 fixed bg-gray-900/50 backdrop-blur-sm"
              onClick={handleModal}
            >
              <div
                className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/4 bg-primary p-12"
                onClick={(e) => e.stopPropagation()}
              >
                <div
                  className="absolute right-2 top-2 cursor-pointer"
                  onClick={handleModal}
                >
                  <CloseIcon />
                </div>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/QfhNO1_GSEM?si=XYAIDIf6xs0zuBg6"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                  className="w-[18rem] h-[11rem] sm:w-[40rem] sm:h-[22rem]"
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </section>

      <section className={`${styles.paddingY} px-12`}>
        <h2 className={`${styles.heading3} text-center mb-12`}>Updated News</h2>
        <div className="grid md:grid-cols-3 ss:grid-cols-2 gap-8">
          {newsData.slice(0, 3).map((news) => (
            <div
              key={news.id}
              className="p-4 bg-abuTerang rounded-xl cursor-pointer"
              onClick={() => navigate(`/berita/${news.id}`)}
            >
              <img
                src={`${localhostLink}/image/public/news/${news.image}`}
                alt={news.judul}
                className="object-cover w-full h-full rounded-xl max-h-[230px]"
              />
              <div className="mt-4">
                <p className={`${styles.fontSmallBold} text-merahh-500`}>
                  {news.kategory}
                </p>
                <h6 className={`${styles.heading6} my-2`}>{news.judul}</h6>
                <p className={`${styles.fontSmall} text-abuGelap`}>
                  {news.tanggal}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        className={`${styles.paddingX} ${styles.paddingY} flex flex-col sm:flex-row sm:gap-40 gap-8`}
      >
        <div className="">
          <h2 className={`${styles.heading3}`}>Frequently Asked Question</h2>
          <p className="mt-2">
            BPR Arto Moro adalah BPR kategori SEHAT dengan visi & misi menjadi
            yang TERBESAR & TERBAIK di kota Semarang. Pada usia yang masih
            relatif Muda, saat ini posisi BPR Arto Moro adalah 3 Besar di Kota
            Semarang.
          </p>
        </div>

        <div className="">
          <Accordion
            className="px-4"
            sx={{
              boxShadow: "none",
              background: "#cdedfa",
            }}
            expanded={expanded === "panel1"}
            onChange={handleAccordion("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ padding: "0px", border: "none" }}
              className="font-semibold"
            >
              Tentang NPL
            </AccordionSummary>
            <AccordionDetails>
              <p>
                NPL (Non Performing Loan) atau prosentase kredit bermasalah di
                BPR Arto Moro pada saat ini adalah di bawah 5%. Artinya masih di
                bawah ketentuan yang ditetapkan oleh OJK yaitu 5%. Adapun NPL
                pada bulan Juli 2022 adalah 3,51%.
                <br />
                <br />
                Sebelumnya, berdasarkan hasil publikasi resmi dari Otoritas Jasa
                Keuangan (OJK) pada bulan Desember 2021,{" "}
                <span className="text-merahh-500">
                  NPL BPR Arto Moro adalah yang terbaik diantara 5 (Lima) Besar
                  BPR di Kota Semarang.
                </span>{" "}
                Tentu saja fakta ini menunjukkan bahwa kinerja BPR Arto Moro
                tidak kalah dengan kinerja 4 BPR terbesar di kota Semarang.
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion
            className="px-4 mt-4"
            sx={{
              boxShadow: "none",
              background: "#cdedfa",
            }}
            expanded={expanded === "panel2"}
            onChange={handleAccordion("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ padding: "0px", border: "none" }}
              className="font-semibold"
            >
              Tentang Keamanan Simpanan
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Dana Nasabah/Masyarakat yang dismpan di BPR Arto Moro dalam
                bentuk Tabungan dan Deposito Aman karena dijamin oleh Lembaga
                Penjamin Simpanan (LPS). Adapun maksimal simpanan yang dijamin
                oleh LPS adalah 2 (dua) milyar rupiah per nomor rekening sesuai
                dengan NIK.
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion
            className="px-4 mt-4"
            sx={{
              boxShadow: "none",
              background: "#cdedfa",
            }}
            expanded={expanded === "panel3"}
            onChange={handleAccordion("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ padding: "0px", border: "none", borderRadius: "16px" }}
              className="font-semibold"
            >
              Tentang Tingkat Kesehatan Bank
            </AccordionSummary>
            <AccordionDetails>
              <p>
                BPR Arto Moro adalah BPR yang Sehat sesuai Kriteria yang sudah
                ditetapkan oleh Otoritas Jasa Keuangan (OJK) berdasarakan hasil
                kinerja seluruh aspek yang dinilai.
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Home;
