import { formSelectTabungan } from "../../data/index";
import styles from "../../data/style";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const Kredit = () => {
  return (
    <div className="">
      <h2 className={`${styles.heading3} mb-4`}>Pengajuan</h2>
      <div action="" className="grid justify-center gap-4 mx-auto md:w-[850px]">
        <div className="grid sm:grid-cols-3 gap-4">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Produk Tabungan
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label={"Produk Tabungan"}
            >
              {formSelectTabungan.map((produk) => (
                <MenuItem key={produk.id} value={produk.title}>
                  {produk.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="Tentukan Tanggal" />
          </LocalizationProvider>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker label="Tentukan Waktu" />
          </LocalizationProvider>

          <div className={`${styles.inputSpan} sm:col-span-3`}>
            <span>Lokasi</span>
            <TextareaAutosize
              className="resize-none text-sm font-sans font-normal leading-5 px-3 py-2 rounded-lg 
                border border-solid border-slate-300 hover:border focus:border-black focus-visible:outline-0 box-border"
              aria-label="empty textarea"
              minRows={3}
              placeholder="Tentukan Lokasi"
            />
          </div>
        </div>

        <div className={`${styles.inputSpan}`}>
          <span>Catatan</span>
          <TextareaAutosize
            className="resize-none text-sm font-sans font-normal leading-5 px-3 py-2 rounded-lg 
                border border-solid border-slate-300 hover:border focus:border-black focus-visible:outline-0 box-border"
            aria-label="empty textarea"
            minRows={3}
            placeholder="Catatan"
          />
          <p className={`${styles.fontCaption} mt-2`}>
            Mohon mengisi di CATATAN kalo memang ada Informasi Awal yang perlu
            disampaikan kepada kami. Terima kasih telah memberikan kepercayaan
            kepada BPR ARTO MORO Semarang, kami akan segera menghubungi melalui
            No. Handphone Anda.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Kredit;
