import React from "react";
import { nomorInduk } from "../helper/nomor";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const PopUp = ({
  nama,
  email,
  nomor,
  nik,
  code,
  jenis,
  setOpenModal,
  openModal,
}) => {
  const dataFields = [
    { label: "Nama Lengkap", value: nama },
    { label: "Email", value: email },
    { label: "Nomor Handphone", value: nomor },
    { label: "NIK", value: nik },
    { label: "Kode Unik", value: code },
    { label: "Jenis", value: jenis },
  ];

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-gray-900/50 backdrop-blur-sm">
      <div className="bg-primary p-6 md:p-8 rounded-lg max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <h1 className="text-xl md:text-2xl font-bold mb-4">Data Identitas</h1>
        <div className="space-y-2">
          {dataFields.map((field, index) => (
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
          <button
            className="border-2 border-gray-600 px-4 py-2 rounded-md text-gray-600 font-semibold text-center"
            onClick={() => setOpenModal(!openModal)}
          >
            Kembali
          </button>
          <a
            className="border-2 border-[#12a50b] px-4 py-2 rounded-md text-[#12a50b] font-semibold text-center"
            href={`https://wa.me/+62${nomorInduk}?text=Saya%20${nama}%20dengan%20kode%20${code}%20pengajuan%20${jenis}`}
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

export default PopUp;
