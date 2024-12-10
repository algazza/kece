import React from "react";
import { nomorInduk } from "../../helper/nomor";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import styles from "../../helper/style";

const PopUpCoop = ({
  nama,
  email,
  nomor,
  jenis,
  setOpenModal,
  openModal,
}) => {
  const popupDataFields = [
    { label: "Nama Lengkap", value: nama },
    { label: "Email", value: email },
    { label: "Nomor Handphone", value: nomor },
    { label: "Jenis", value: jenis },
  ];

  return (
    <div className={`${styles.flexCenter} fixed inset-0 z-[999] bg-gray-900/50 backdrop-blur-sm`}>
      <div className="bg-primary p-6 md:p-8 rounded-lg max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <h1 className="text-xl md:text-2xl font-bold mb-4">Data Identitas</h1>
        <div className="space-y-2">
          {popupDataFields.map((field, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center"
            >
              <span className="font-bold text-sm sm:text-base sm:w-1/3">
                {field.label}:
              </span>
              <span className="text-sm sm:text-base sm:w-2/3 break-words">
                {field.value}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm">Silahkan lanjut jika berminat</p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <Link
            className="border-2 border-gray-600 px-4 py-2 rounded-md text-gray-600 font-semibold text-center"
            to={"/"}
          >
            Kembali ke Home
          </Link>
          <a
            className="border-2 border-[#12a50b] px-4 py-2 rounded-md text-[#12a50b] font-semibold text-center"
            href={`https://wa.me/+62${nomorInduk}?text=Saya%20${nama}%20pengajuan%20${jenis}`}
            target="_blank"
          >
            <WhatsAppIcon className="text-[#12a50b] mr-2" />
            Lanjutkan
          </a>
        </div>
      </div>
    </div>
  );
};

export default PopUpCoop;
