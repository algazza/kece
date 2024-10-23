import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import styles from "../helper/style";
import ImageBanner from "../Layouts/ImageBanner";
import {
  ImageSimulasi,
  phoneimg,
  SimulasiPercil1,
  SimulasiPercil2,
  SimulasiPercil3,
  SimulasiPercil4,
  ThumbnailYoutube,
} from "../helper/index";
// ==================== ICON ===========================
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DiscountIcon from "@mui/icons-material/Discount";
import CalculateIcon from "@mui/icons-material/Calculate";
import MovingIcon from "@mui/icons-material/Moving";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupsIcon from "@mui/icons-material/Groups";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import PublicIcon from "@mui/icons-material/Public";
import FeedIcon from "@mui/icons-material/Feed";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SimulasiCalcKredit from "../Components/Simulasi/SimulasiCalcKredit";
import SimulasiCalcDeposito from "../Components/Simulasi/SimulasiCalcDeposito";
import SimulasiCalcTabungan from "../Components/Simulasi/SimulasiCalcTabungan";
import RateBunga from "../Components/Modal/RateBunga";
import { localhostLink } from "../helper/localhost";
import YoutubePopup from "../Components/Modal/YoutubePopup";

const menuHome = [
  {
    icon: (className) => <DiscountIcon className={className} />,
    title: "Promo",
    link: "promo",
  },
  {
    icon: (className) => <CalculateIcon className={className} />,
    title: "Simulasi",
    link: "#simulasi",
  },
  {
    icon: (className) => <EmojiEventsIcon className={className} />,
    title: "Penghargaan",
    link: "penghargaan",
  },
  {
    icon: (className) => <FeedIcon className={className} />,
    title: "Berita Terbaru",
    link: "",
  },
  {
    icon: (className) => <PublicIcon className={className} />,
    title: "Layanan Digital",
    link: "digital-banking",
  },
  {
    icon: (className) => <LocationOnIcon className={className} />,
    title: "Lokasi",
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

        <div className={`${styles.flexStart} py-4 sm:px-8`}>
          <div className="flex flex-wrap gap-8 justify-center py-4">
            {menuHome.map((menu, index) => (
              <Link
                to={menu.link}
                key={index}
                className="group bg-abuTerang grid justify-items-center sm:w-[160px] w-[110px] sm:py-4 py-2 sm:px-4 px-2 rounded-xl transition-all duration-300 ease-in-out"
              >
                {menu.icon("text-abuGelap group-hover:text-merahh-500 ")}
                <h2
                  className={`${styles.fontBodyBold} flex-shrink-0 text-center`}
                >
                  {menu.title}
                </h2>
              </Link>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {openRateBunga && (
            <RateBunga handleOpenRateBunga={handleOpenRateBunga} />
          )}
        </AnimatePresence>
        {/* <RateBunga handleOpenRateBunga={handleOpenRateBunga} /> */}
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
            <img src={phoneimg} alt="handphone" className="w-[260px]" />
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
          <img src={ImageSimulasi} alt="gambar wanita" />
        </div>

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

          <div className={`${styles.fontSmall} text-abuGelap mt-4`}>
            Syarat & Ketentuan
            <p>
              * Setelah jangka waktu fixed rate berakhir, suku bunga yang
              berlaku adalah suku bunga floating rate.
            </p>
            <p>
              * Perincian Kredit di atas hanya merupakan simulasi/ estimasi
              biaya.
            </p>
            <p>* Perhitungan tersebut masih belum termasuk biaya lain-lain.</p>
          </div>
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
          <YoutubePopup handleModal={handleModal}/>
        )}
      </section>

      <section className={`${styles.paddingY} px-12`}>
        <h2 className={`${styles.heading3} text-center mb-12`}>
          Berita Terbaru
        </h2>
        <div className="grid md:grid-cols-3 ss:grid-cols-2 gap-8">
          {newsData.slice(0, 3).map((news) => (
            <div
              key={news.id}
              className="p-4 bg-abuTerang rounded-xl cursor-pointer"
              onClick={() => navigate(`berita/${news.slug}`)}
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
