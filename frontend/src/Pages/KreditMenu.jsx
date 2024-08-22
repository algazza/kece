import { Link } from "react-router-dom";
import { BlueBanner } from "../helper";
import styles from "../helper/style";
import Footer from "../Layouts/Footer";
import Header from "../Layouts/Header";
import IntroBanner from "../Layouts/IntroBanner";
import TitleBlueBanner from "../Layouts/TitleBlueBanner";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

// ===================================
const buttonMenuKredit = [
  {
    icon: (className) => <TrendingUpIcon className={className} />,
    title: "Kredit Investasi",
    deskripsi: "panduan perilaku dan prinsip moral bagi karyawan bank.",
  },
  {
    icon: (className) => <TrendingUpIcon className={className} />,
    title: "Kredit Modal Usaha",
    deskripsi: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    icon: (className) => <TrendingUpIcon className={className} />,
    title: "Kredit KPR",
    deskripsi: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    icon: (className) => <TrendingUpIcon className={className} />,
    title: "Kredit Multiguna",
    deskripsi: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    icon: (className) => <TrendingUpIcon className={className} />,
    title: "Kredit Konsumtif",
    deskripsi: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    icon: (className) => <TrendingUpIcon className={className} />,
    title: "Kredit Pembiayaan Umroh (PAMOR)",
    deskripsi: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    icon: (className) => <TrendingUpIcon className={className} />,
    title: "Kredit Pembiayaan Ziarah (ZAMRUD)",
    deskripsi: "Lorem ipsum dolor sit amet consectetur.",
  },
];

const KreditMenu = () => {
  const indexColsSpan = [];
  return (
    <>
      <Header />
      <main>
        <section className="">
          <IntroBanner
            ImageBanner={BlueBanner}
            TitleBanner={"Kredit"}
            DescriptionBanner={`
                        Selamat datang di BPR Arto Moro, solusi finansial terpercaya untuk
                        memenuhi berbagai kebutuhan Anda. Kami memahami bahwa setiap individu
                        dan usaha memiliki kebutuhan yang unik, oleh karena itu kami
                        menawarkan berbagai produk kredit yang dapat disesuaikan dengan
                        keperluan Anda.
                        `}
          />
          <TitleBlueBanner title={"Kredit"} />
        </section>

        <section className="">
          {/* filter button  click */}
          <div className=" flex gap-3 justify-center m-10">
            <div
              className={`${styles.fontBody} font-semibold bg-biruMuda-500 p-3 rounded-lg text-white`}
            >
              Datang Ke bank
            </div>
            <div
              className={`${styles.fontBody} font-semibold border-2 border-biruMuda-500 p-3 rounded-lg text-biruMuda-500`}
            >
              Via online
            </div>
          </div>

          {/* menu button */}
          <div className="grid gap-8 justify-center justify-items-center grid-cols-x3300">
            {/* sdsdf */}
            {buttonMenuKredit.map((menu, index) => (
              <Link
                to={"/news"}
                className={`${
                  indexColsSpan.includes(index) ? "col-span-2" : ""
                } bg-abuTerang  drop-shadow-lg rounded-lg p-5 w-72 flex flex-col items-center align-middle text-center`}
                key={index}
              >
                {menu.icon("m-2 text-blue-400  ")}
                <h6 className={`${styles.heading6}`}>{menu.title}</h6>
                <p className="mt-4">{menu.deskripsi}</p>
              </Link>
            ))}
            {/* dasdasd */}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default KreditMenu;
