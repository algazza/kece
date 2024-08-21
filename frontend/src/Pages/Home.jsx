import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { motion } from "framer-motion";
import styles from "../data/style";
import ImageBanner from "../Layouts/ImageBanner";
import {
  Banneremyu,
  BennerLiv,
  nunezimg,
  phoneimg,
  sampleBanner,
} from "../data";
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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";

const images = [
  Banneremyu,
  // sampleBanner,
];

const menuHome = [
  {
    id: 1,
    icon: (className) => <AccountBalanceIcon className={className} />,
    title: "Kredit",
  },
  {
    id: 2,
    icon: (className) => <MonetizationOnIcon className={className} />,
    title: "Deposito",
  },
  {
    id: 3,
    icon: (className) => <AccountBalanceWalletIcon className={className} />,
    title: "Tabungan",
  },
  {
    id: 4,
    icon: (className) => <LocationOnIcon className={className} />,
    title: "Location",
  },
  {
    id: 5,
    icon: (className) => <LocalShippingIcon className={className} />,
    title: "Mobil Kas",
  },
  {
    id: 6,
    icon: (className) => <DirectionsCarIcon className={className} />,
    title: "Pickup",
  },
  {
    id: 7,
    icon: (className) => <HomeIcon className={className} />,
    title: "Properti",
  },
  {
    id: 8,
    icon: (className) => <DiscountIcon className={className} />,
    title: "Promo",
  },
  {
    id: 9,
    icon: (className) => <CalculateIcon className={className} />,
    title: "Simulasi",
  },
  {
    id: 10,
    icon: (className) => <PercentIcon className={className} />,
    title: "Rate Bunga",
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
  const [newsData, setNewsData] = useState([]);
  const [expanded, setExpanded] = React.useState(false);
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

  const handleOpen = () => {
    setOpenMenu(!openMenu);
  };

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const handleAccordion = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <section className="pb-6">
        <div className="rounded-br-[300px] overflow-hidden">
          <ImageBanner images={images} />
        </div>
        <div className="flex justify-center items-start py-4 sm:px-8 sm:gap-8 gap-2">
          <motion.div
            className={`grid sm:grid-cols-x5170 grid-cols-3 gap-x-2 gap-y-8 sm:gap-8 justify-center  p-4 rounded-lg border-b-4 border-abu `}
            initial={{ height: "5.5rem", overflow: "hidden" }}
            animate={{ height: openMenu ? "auto" : "5.9rem" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {menuHome.map((menu) => (
              <Link
                to={menu.title}
                key={menu.id}
                className="group bg-abuTerang grid justify-items-center py-2 sm:px-6 px-3 rounded-xl "
              >
                {menu.icon(
                  "text-abuGelap group-hover:text-merahh transition-all duration-300 ease-in-out"
                )}
                <h2 className={`${styles.fontBodyBold} flex-shrink-0 `}>
                  {menu.title}
                </h2>
              </Link>
            ))}
          </motion.div>
          <div className="w-10 cursor-pointer" onClick={handleOpen}>
            <div className="bg-abuTerang rounded-xl p-2">
              <AddIcon />
            </div>
          </div>
        </div>
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

          <div className="grid justify-center">
            <img src={phoneimg} alt="" className="w-[260px]" />
            <div className="absolute z-[-1] w-[30rem] h-[30rem] rounded-full right-[18rem] md:right-[2rem] top-[52rem] md:top-[42rem] blue__gradient" />
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
              {award.icon("m-4 text-purple-800 text-5xl", {fontSize: "3.5rem"})}
              <div>
                <h5 className={`${styles.heading5}`}>{award.title}</h5>
                <p className={`${styles.fontBody}`}>{award.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={`${styles.paddingY}`}>
        <h2 className={`${styles.heading3}  text-center mb-12`}>
          Company Profile
        </h2>
        <div className={`${styles.flexCenter}`}>
          <img
            src={nunezimg}
            alt=""
            className="cursor-pointer"
            onClick={handleModal}
          />
        </div>

        {openModal && (
          <div className="w-screen h-dvh top-0 left-0 bottom-0 right-0 fixed">
            <div className="w-screen h-dvh top-0 left-0 bottom-0 right-0 fixed bg-gray-900/50">
              <div className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/4 bg-primary p-12">
                <div
                  className="absolute right-2 top-2 cursor-pointer"
                  onClick={handleModal}
                >
                  <CloseIcon />
                </div>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/UPubaRIRWkA?si=Lt32z9nnSQ4RUFJV"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
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
              onClick={() => navigate(`/news/${news.id}`)}
            >
              <img
                src={`http://localhost:8000/image/public/news/${news.image}`}
                alt={news.judul}
                className="object-cover w-full h-full rounded-xl max-h-[230px]"
              />
              <div className="mt-4">
                <p className={`${styles.fontSmallBold} text-merahh`}>
                  {news.kategory}
                </p>
                <h6 className={`${styles.heading6} my-2`}>{news.judul}</h6>
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
                <span className="text-merahh">
                  NPL BPR Arto Moro adalah yang terbaik diantara 5 (Lima) Besar
                  BPR di Kota Semarang.
                </span>{" "}
                Tentu saja fakta ini menunjukkan bahwa kinerja BPR Arto Moro
                tidak kalah dengan kinerja 4 BPR terbesar di kota Semarang.
                {/* <br />
                <br />
                NPL adalah komponen vital bagi kesehatan bank, termasuk Bank
                Umum dan BPR, serta Pihak Ketiga yang ingin bekerja sama atau
                menempatkan dana. BPR Arto Moro sangat menjaga kualitas
                kreditnya agar NPL tidak melebihi 5%, demi mempertahankan
                kepercayaan masyarakat, pihak ketiga, dan stakeholders.
                Kepercayaan masyarakat adalah prioritas utama karena BPR Arto
                Moro berfungsi sebagai lembaga intermediasi yang resmi dan
                dilindungi undang-undang. */}
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
