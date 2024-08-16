import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "../data/style";
import { phoneimg, sampleBanner } from "../data";
import ImageBanner from "../Layouts/ImageBanner";
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

const images = [
  "https://bprartomoro.co.id/wp-content/uploads/2024/07/Dengan-ini-di-Umumkan-nama-perseroan-1920-x-1080-piksel-1878x874.png",
  "https://bprartomoro.co.id/wp-content/uploads/2023/05/penilaian_ojk_bpr_kategori_sehat-800x323.jpg",
  sampleBanner,
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
    icon: (className) => <MovingIcon className={className} />,
    title: "Terbesar Dikota Semarang",
    description: "BPR Terbesar Nomer 3 di Kota Semarang.",
  },
  {
    icon: (className) => <EmojiEventsIcon className={className} />,
    title: "Memiliki 6 penghargaan",
    description: "Top 100 BPR 2023 versi majalah The Finance.",
  },
  {
    icon: (className) => <AutoAwesomeIcon className={className} />,
    title: "Berkomitmen Untuk Terus Berinovasi",
    description:
      "Terus berinovasi sesuai dengan perkembangan jaman untuk memenuhi kebutuhan nasabah.",
  },
  {
    icon: (className) => <LocalAtmIcon className={className} />,
    title: "Memiliki Bunga Yang Rendah",
    description: "Dengan bunga yang ringan dapat menunjang usaha anda.",
  },
  {
    icon: (className) => <GroupsIcon className={className} />,
    title: "Memberikan Layanan yang Terbaik",
    description:
      "BPR Arto Moro selalu memberikan pelayanan yang terbaik untuk nasasbah.",
  },
];

const Home = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpen = () => {
    setOpenMenu(!openMenu);
  };
  

  return (
    <main className={`${styles.paddingY}`}>
      <section className="py-6">
        <div className="rounded-br-[300px] overflow-hidden">
          <ImageBanner images={images} />
        </div>
        <div className="flex justify-center items-start py-4 px-8 gap-8">
          <motion.div
            className={`grid grid-cols-x5170 gap-8 justify-center`}
            initial={{ height: "5.5rem", overflow: "hidden" }}
            animate={{ height: openMenu ? "auto" : "5.5rem" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {menuHome.map((menu) => (
              <Link
                to={menu.title}
                key={menu.id}
                className="group bg-abuTerang grid justify-items-center py-2 px-6 rounded-xl "
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

      <section className={`${styles.marginX} mb-20`}>
        <div className="grid sm:grid-flow-col">
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
            <div className="absolute z-[-1] w-[30rem] h-[30rem] rounded-full right-[2rem] top-[42rem] blue__gradient"/>
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
              {award.icon("m-4 text-purple-800")}
              <div>
                <h5 className={`${styles.heading5}`}>{award.title}</h5>
                <p className={`${styles.fontBody}`}>{award.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="">
        
      </section>
    </main>
  );
};

export default Home;
