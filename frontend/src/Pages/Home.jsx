import React, { useState, useEffect } from "react";
import { nunezimg, sampleBanner } from "../data";
import ImageBanner from "./ImageBanner";
import Header from "../Layouts/Header";
import styles from "../data/style";
import MovingIcon from '@mui/icons-material/Moving';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
const images = [
  sampleBanner,
  sampleBanner,
];

const Home = () => {

  return (
    <>
    <Header />
    <div className={`${styles.paddingY}`}>
      <ImageBanner images={images}/>
    </div>

    {/* section 2 */}
    <div className={`${styles.marginX} mb-20`}>
      <div className="mb-16">
        <h4 className={`${styles.heading4}`}>Mengapa Memilih <span className="text-red-600">BPR ARTOMORO</span></h4>
        <p className="max-w-lg mt-4">BPR Arto Moro adalah BPR kategori SEHAT dengan visi & misi menjadi yang TERBESAR & TERBAIK di kota Semarang. Pada usia yang masih relatif Muda, saat ini posisi BPR Arto Moro adalah 3 Besar di Kota Semarang.</p>
      </div>


      {/* icon - 1 */}
      <div className="mt-4">

        <div className="flex items-center">
          <MovingIcon className="m-4 text-purple-800"/>
          <div className="">
            <h5 className={`${styles.heading5} ${styles.fontBodyBold}`}>Memiliki 6 penghargaan</h5>
            <p>Top 100 BPR 2023 versi majalah The Finance.</p>
          </div>
        </div>

      </div>
      {/* icon - 2 */}
      <div className="mt-4">

        <div className="flex items-center">
          <EmojiEventsIcon className="m-4 text-purple-800"/>
          <div className="">
            <h5 className={`${styles.heading5} ${styles.fontBodyBold}`}>Memiliki Bunga Yang Rendah</h5>
            <p>Dengan bunga yang ringan dapat menunjang usaha anda</p>
          </div>
        </div>

      </div>
      {/* icon - 3 */}
      <div className="mt-4">

        <div className="flex items-center">
          <LocalAtmIcon className="m-4 text-purple-800"/>
          <div className="">
            <h5 className={`${styles.heading5} ${styles.fontBodyBold}`}>Berkomitmen untuk terus berinovasi</h5>
            <p>terus berinovasi sesuai dengan perkembangan jaman untuk memenuhi kebutuhan nasabah</p>
          </div>
        </div>

      </div>
      {/* icon - 4 */}
      <div className="mt-4">

        <div className="flex items-center">
          <AutoAwesomeIcon className="m-4 text-purple-800"/>
          <div className="">
            <h5 className={`${styles.heading5} ${styles.fontBodyBold}`}>Memberikan layanan yang terbaik</h5>
            <p>BPR Arto Moro selalu memberikan pelayanan yang terbaik untuk nasasbah</p>
          </div>
        </div>

      </div>

    </div>
    </>
  );
};

export default Home;
