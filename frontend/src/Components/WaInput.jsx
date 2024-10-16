import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  FormControl,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { nomorInduk } from "../helper/nomor";

const WaInput = ({ handleModal }) => {
  const [nameUser, setNameUser] = useState("");
  const [produkSelect, setProdukSelect] = useState("");
  const [pengaduan, setPengaduan] = useState("");

  return (
    <div className="w-screen h-dvh top-0 left-0 bottom-0 right-0 fixed z-[1000]">
      <div
        className="w-screen h-dvh top-0 left-0 bottom-0 right-0 fixed bg-gray-900/50 backdrop-blur-sm"
        onClick={handleModal}
      >
        <div
          className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/4 bg-primary p-12 md:min-w-[900px] min-w-[400px]"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="absolute right-2 top-2 cursor-pointer"
            onClick={handleModal}
          >
            <CloseIcon />
          </div>

          <FormGroup className="felx flex-col gap-4">
            <TextField
              id="outlined-basic"
              label="Nama"
              type="text"
              name="Nama User"
              variant="outlined"
              className="rounded-md outline-none"
              value={nameUser}
              onChange={(e) => setNameUser(e.target.value)}
            />

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Produk/Layanan
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Produk/Layanan"
                name="Produk/Layanan"
                value={produkSelect}
                onChange={(e) => setProdukSelect(e.target.value)}
              >
                {[
                  "Tabungan",
                  "Deposito",
                  "Kredit",
                  "Layanan Digital",
                  "Mobil Kas",
                  "Promo",
                  "Sponsor",
                  "Pick Up Service",
                ].map((selek, index) => (
                  <MenuItem key={index} value={selek}>
                    {selek}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl>
              <TextareaAutosize
                className={`resize-none text-sm font-sans font-normal leading-5 px-3 py-2 rounded-lg border 
                hover:border-black focus:border-blue-600 focus-visible:outline-0 box-border border-slate-300 `}
                aria-label="Pengaduan"
                minRows={5}
                placeholder="Masukan Pertanyaan Anda..."
                name="pengaduan"
                value={pengaduan}
                onChange={(e) => setPengaduan(e.target.value)}
              />
            </FormControl>

            <a
              className={`bg-[#12a50b] px-4 py-2 rounded-md text-primary font-semibold text-center`}
              href={
                nameUser || produkSelect == true 
                  ? `https://wa.me/+62${nomorInduk}?text=halo,%20saya%20${nameUser}%20ingin%20mengetahui%20lebih%20lanjut%20mengenai%20${produkSelect}.${pengaduan}`
                  : `https://wa.me/+62${nomorInduk}?text=Halo`
              }
              target="_blank"
            >
              <WhatsAppIcon className="text-primary mr-2" />
              Lanjutkan
            </a>
          </FormGroup>
        </div>
      </div>
    </div>
  );
};

export default WaInput;
