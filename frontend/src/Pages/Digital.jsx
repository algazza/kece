import React from 'react'
import styles from '../helper/style'
import TitleBlueBanner from '../Layouts/TitleBlueBanner'
import IntroBanner from '../Layouts/IntroBanner'
import { BlueBanner } from '../helper'
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { Link } from 'react-router-dom'

const buttonMenuDigital = [
  {
    id: 1,
    icon: (className) => (
      <TrendingUpIcon className={className} sx={{ fontSize: "40px" }} />
    ),
    title: "ATM Cardless",
    deskripsi: "panduan perilaku dan prinsip moral bagi karyawan bank.",
    jenis: "Via online",
  },
  {
    id: 2,
    icon: (className) => (
      <TrendingUpIcon className={className} sx={{ fontSize: "40px" }} />
    ),
    title: "Armor Mobile",
    deskripsi: "panduan perilaku dan prinsip moral bagi karyawan bank.",
    jenis: "Via online",
  },
  {
    id: 3,
    icon: (className) => (
      <TrendingUpIcon className={className} sx={{ fontSize: "40px" }} />
    ),
    title: "Infobank Transfer",
    deskripsi: "panduan perilaku dan prinsip moral bagi karyawan bank.",
    jenis: "Via online",
  },
  {
    id: 4,
    icon: (className) => (
      <TrendingUpIcon className={className} sx={{ fontSize: "40px" }} />
    ),
    title: "Armor Pay",
    deskripsi: "panduan perilaku dan prinsip moral bagi karyawan bank.",
    jenis: "Via online",
  },
  {
    id: 5,
    icon: (className) => (
      <TrendingUpIcon className={className} sx={{ fontSize: "40px" }} />
    ),
    title: "Armor Merchant",
    deskripsi: "panduan perilaku dan prinsip moral bagi karyawan bank.",
    jenis: "Via online",
  },
  {
    id: 6,
    icon: (className) => (
      <TrendingUpIcon className={className} sx={{ fontSize: "40px" }} />
    ),
    title: "Armor Wa Notif",
    deskripsi: "panduan perilaku dan prinsip moral bagi karyawan bank.",
    jenis: "Via online",
  },
]
const Digital = () => {
  return (
    <>
      <section>
        <IntroBanner
          ImageBanner={BlueBanner}
          TitleBanner={"Layanan Digital"}
          DescriptionBanner={`
                Selamat datang di BPR Arto Moro, solusi finansial terpercaya untuk
                memenuhi berbagai kebutuhan Anda. Kami memahami bahwa setiap individu
                dan usaha memiliki kebutuhan yang unik, oleh karena itu kami
                menawarkan berbagai produk kredit yang dapat disesuaikan dengan
                keperluan Anda.
            `}
        />
        <TitleBlueBanner title={"Layanan Digital"} />
      </section>

      <span className="-mt-[100px] pb-[100px] block" id="section2">
        &nbsp;
      </span>

      <section
          className={`${styles.paddingY} px-16 flex flex-wrap gap-8 justify-center justify-items-center`}
        >
          {/* menu button */}
          {buttonMenuDigital.map((menu, index) => (
            <Link
              to="#section2"
              className={`bg-abuTerang drop-shadow-lg rounded-lg p-5 w-[300px] flex flex-col items-center align-middle text-center cursor-pointer`}
              key={index}
              // onClick={() => updateMenu(menu.id)}
            >
              {menu.icon("m-2 text-blue-400")}
              <h6 className={`${styles.heading6}`}>{menu.title}</h6>
              <p className="mt-4">{menu.deskripsi}</p>
            </Link>
          ))}
        </section>
    </>
  )
}

export default Digital