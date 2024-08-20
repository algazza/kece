import { BlueBanner } from "../data";
import styles from "../data/style";
import Footer from "../Layouts/Footer";
import Header from "../Layouts/Header";
import IntroBanner from "../Layouts/IntroBanner";
import TitleBlueBanner from "../Layouts/TitleBlueBanner";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

// ===================================
const buttonMenuTabungan = [
  {
    icon: (className) => <TrendingUpIcon className={className} />,
    title: "Tabungan Pro Active",
    deskripsi: "panduan perilaku dan prinsip moral bagi karyawan bank.",
  },
  {
    icon: (className) => <TrendingUpIcon className={className} />,
    title: "Tabungan Arisan Bulanan ARTOMORO",
    deskripsi: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    icon: (className) => <TrendingUpIcon className={className} />,
    title: "Tabungan Gemilang (TAGAR)",
    deskripsi: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    icon: (className) => <TrendingUpIcon className={className} />,
    title: "Tabungan Umroh (TABUR)",
    deskripsi: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    icon: (className) => <TrendingUpIcon className={className} />,
    title: "Simpanan Pelajar (SIMPEL)",
    deskripsi: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    icon: (className) => <TrendingUpIcon className={className} />,
    title: "Tabungan Berhadiah Suka - suka (TABSUS)",
    deskripsi: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    icon: (className) => <TrendingUpIcon className={className} />,
    title: "Kredit Pembiayaan Ziarah (ZAMRUD)",
    deskripsi: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    icon: (className) => <TrendingUpIcon className={className} />,
    title: "Tabungan Berhadiah Suka - suka (TABSUS)",
    deskripsi: "Lorem ipsum dolor sit amet consectetur.",
  },
];

const TabunganMenu = () => {
  const indexColsSpan = [1, 4, 6, 7];

  return (
    <>
      <Header />
      <main>
        <section className="">
          <IntroBanner
            ImageBanner={BlueBanner}
            TitleBanner={"Tabungan"}
            DescriptionBanner={`
                        Selamat datang di BPR Arto Moro, solusi finansial terpercaya untuk
                        memenuhi berbagai kebutuhan Anda. Kami memahami bahwa setiap individu
                        dan usaha memiliki kebutuhan yang unik, oleh karena itu kami
                        menawarkan berbagai produk kredit yang dapat disesuaikan dengan
                        keperluan Anda.
                        `}
          />
          <TitleBlueBanner title={"Tabungan"} />
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
          <div className="grid grid-cols-x3170 gap-8 justify-center justify-items-center">
            {/* sdsdf */}
            {buttonMenuTabungan.map((menu, index) => (
              <div
                className={`${
                  indexColsSpan.includes(index) ? "col-span-2" : ""
                } bg-abuTerang  drop-shadow-lg rounded-lg p-5 w-72 flex flex-col items-center align-middle text-center`}
                key={index}
              >
                {menu.icon("m-2 text-blue-400  ")}
                <h6 className={`${styles.heading6}`}>{menu.title}</h6>
                <p className="mt-4">{menu.deskripsi}</p>
              </div>
            ))}
            {/* dasdasd */}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TabunganMenu;
