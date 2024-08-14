import { Link } from "react-router-dom";
import styles from "../data/style";
import {  sampleBanner } from "../data";
import ImageBanner from "./ImageBanner";
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
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const images = [
  "https://bprartomoro.co.id/wp-content/uploads/2024/07/Dengan-ini-di-Umumkan-nama-perseroan-1920-x-1080-piksel-1878x874.png",
  "https://bprartomoro.co.id/wp-content/uploads/2023/05/penilaian_ojk_bpr_kategori_sehat-800x323.jpg",
  sampleBanner,
];

const menuHome = [
  {
    id: 1,
    icon: (className) => <AccountBalanceIcon className={className}/>,
    title: "Kredit",
  },
  {
    id: 2,
    icon: (className) => <MonetizationOnIcon className={className}/>,
    title: "Deposito",
  },
  {
    id: 3,
    icon: (className) => <AccountBalanceWalletIcon className={className}/>,
    title: "Tabungan",
  },
  {
    id: 4,
    icon: (className) => <LocationOnIcon className={className}/>,
    title: "Location",
  },
  {
    id: 5,
    icon: (className) => <LocalShippingIcon className={className}/>,
    title: "Mobil Kas",
  },
  {
    id: 6,
    icon: (className) => <DirectionsCarIcon className={className}/>,
    title: "Pickup",
  },
  {
    id: 7,
    icon: (className) => <HomeIcon className={className}/>,
    title: "Properti",
  },
  {
    id: 8,
    icon: (className) => <DiscountIcon className={className}/>,
    title: "Promo",
  },
  {
    id: 9,
    icon: (className) => <CalculateIcon className={className}/>,
    title: "Simulasi",
  },
  {
    id: 10,
    icon: (className) => <PercentIcon className={className}/>,
    title: "Rate Bunga",
  },
]

const Home = () => {
  return (
    <main className={`${styles.paddingY}`}>
      <section className="py-6">
        <div className="rounded-br-[300px] overflow-hidden">
          <ImageBanner images={images} />
        </div>
        <div className="py-4 grid grid-cols-x5170 gap-8 justify-center px-8">
          {menuHome.map((menu) => (
            <Link to={menu.title} key={menu.id} className="group bg-abuTerang grid justify-items-center py-2 px-6 rounded-xl transition-transform duration-300" >
              {menu.icon("text-abuGelap group-hover:text-merahh")}
              <h2 className={`${styles.fontBodyBold} flex-shrink-0 `}>{menu.title}</h2>
            </Link>
          ))}
        </div>
      </section>

      {/* section 2 */}
      <div className={`${styles.marginX} mb-20`}>
        <div className="mb-16">
          <h4 className={`${styles.heading4}`}>
            Mengapa Memilih <span className="text-red-600">BPR ARTOMORO</span>
          </h4>
          <p className="max-w-lg mt-4">
            BPR Arto Moro adalah BPR kategori SEHAT dengan visi & misi menjadi
            yang TERBESAR & TERBAIK di kota Semarang. Pada usia yang masih
            relatif Muda, saat ini posisi BPR Arto Moro adalah 3 Besar di Kota
            Semarang.
          </p>
        </div>

        {/* icon - 1 */}
        <div className="mt-4">
          <div className="flex items-center">
            <MovingIcon className="m-4 text-purple-800" />
            <div className="">
              <h5 className={`${styles.heading5} ${styles.fontBodyBold}`}>
                Memiliki 6 penghargaan
              </h5>
              <p>Top 100 BPR 2023 versi majalah The Finance.</p>
            </div>
          </div>
        </div>
        {/* icon - 2 */}
        <div className="mt-4">
          <div className="flex items-center">
            <EmojiEventsIcon className="m-4 text-purple-800" />
            <div className="">
              <h5 className={`${styles.heading5} ${styles.fontBodyBold}`}>
                Memiliki Bunga Yang Rendah
              </h5>
              <p>Dengan bunga yang ringan dapat menunjang usaha anda</p>
            </div>
          </div>
        </div>
        {/* icon - 3 */}
        <div className="mt-4">
          <div className="flex items-center">
            <LocalAtmIcon className="m-4 text-purple-800" />
            <div className="">
              <h5 className={`${styles.heading5} ${styles.fontBodyBold}`}>
                Berkomitmen untuk terus berinovasi
              </h5>
              <p>
                terus berinovasi sesuai dengan perkembangan jaman untuk memenuhi
                kebutuhan nasabah
              </p>
            </div>
          </div>
        </div>
        {/* icon - 4 */}
        <div className="mt-4">
          <div className="flex items-center">
            <AutoAwesomeIcon className="m-4 text-purple-800" />
            <div className="">
              <h5 className={`${styles.heading5} ${styles.fontBodyBold}`}>
                Memberikan layanan yang terbaik
              </h5>
              <p>
                BPR Arto Moro selalu memberikan pelayanan yang terbaik untuk
                nasasbah
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
