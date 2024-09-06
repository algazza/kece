import React from "react";
import styles from "../helper/style";
import CloseIcon from "@mui/icons-material/Close";
import { ButtonOutline } from "./Button";

const PopUp = ({
  nama,
  email,
  nomor,
  nik,
  code,
  jenis,
  setOpenModal,
  openModal,
  nomer,
}) => {
  return (
    <div className="w-screen h-dvh top-0 left-0 bottom-0 fixed z-40">
      <div className="w-screen h-dvh top-0 left-0 bottom-0 fixed bg-gray-900/50 backdrop-blur-sm">
        <div className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/4 bg-primary p-12">
          <h1 className={`${styles.heading3} mb-4`}>Data Identitas</h1>
          <div className="grid grid-cols-x170">
            <div className="">
              <h3 className={`${styles.fontBodyBold}`}>Nama Lengkap</h3>
              <h3 className={`${styles.fontBodyBold}`}>Email</h3>
              <h3 className={`${styles.fontBodyBold}`}>Nomor Handphone</h3>
              <h3 className={`${styles.fontBodyBold}`}>NIK</h3>
              <h3 className={`${styles.fontBodyBold}`}>Kode Unik</h3>
              <h3 className={`${styles.fontBodyBold}`}>Jenis</h3>
            </div>
            <div>
              <h3 className={`${styles.fontBodyBold}`}>: {nama}</h3>
              <h3 className={`${styles.fontBodyBold}`}>: {email}</h3>
              <h3 className={`${styles.fontBodyBold}`}>: {nomor}</h3>
              <h3 className={`${styles.fontBodyBold}`}>: {nik}</h3>
              <h3 className={`${styles.fontBodyBold}`}>: {code}</h3>
              <h3 className={`${styles.fontBodyBold}`}>: {jenis}</h3>
            </div>
          </div>
          <p className="mt-4">Silahkan lanjut jika berminat</p>
          <div className="flex gap-4 mt-4">
            <button
              className="border-2 border-abuGelap px-4 py-2 rounded-md text-abuGelap font-semibold"
              onClick={() => {
                setOpenModal(!openModal);
              }}
            >
              Kembali
            </button>
            <ButtonOutline
              ColorText="text-[#12a50b]"
              ColorPrimary="border-[#12a50b]"
              ColorPrimary200="bg-[#a0db9d] "
              ColorPrimary400="bg-[#41b73c] "
              WidthButton="w-32"
              TopShadow="top-2"
              LeftShadow="left-[33px]"
              href={`https://wa.me/+62${nomer}?text=I'm%20${nama}%20dengan%20kode%20${code}%20pengajuan%20${jenis}`}
              target={"_blank"}
            >
              Lanjutkan
            </ButtonOutline>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
