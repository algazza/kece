import {
  formJenisSponsor,
  formPenghasilan,
  formSelectKredit,
  formSelectTabungan,
} from "../../helper/index.js";
import styles from "../../helper/style.js";
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  TextareaAutosize,
} from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useState } from "react";

export const Kredit = ({ inputs, handleChange }) => {
  return (
    <div className="">
      <h2 className={`${styles.heading3} mb-4`}>Pengajuan</h2>

      <div
        action=""
        className="grid justify-center gap-4 mx-auto md:grid-cols-x2500"
      >
        <div className="grid w-full sm:grid-cols-2 gap-4">
          <FormControl fullWidth>
            <InputLabel htmlFor="outlined-adornment-amount">
              Total Pinjaman
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">Rp.</InputAdornment>
              }
              label="Total Pinjaman"
              name="total_pinjaman"
              value={inputs.total_pinjaman}
              onChange={handleChange}
              inputProps={{ inputMode: "numeric", pattern: "[0-9,.]*" }}
            />
          </FormControl>

          {formSelectKredit.map((selek) => (
            <FormControl fullWidth key={selek.id}>
              <InputLabel id="demo-simple-select-label">
                {selek.title}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label={selek.title}
                name={selek.name}
                value={inputs[selek.name]}
                onChange={handleChange}
              >
                <MenuItem value={selek.option1}>{selek.option1}</MenuItem>
                <MenuItem value={selek.option2}>{selek.option2}</MenuItem>
                {selek.option3 && (
                  <MenuItem value={selek.option3}>{selek.option3}</MenuItem>
                )}
              </Select>
            </FormControl>
          ))}
        </div>

        <div className=" md:col-[2/3] md:row-[1/3]">
          <div className="form-control bg-abuTerang p-6 border border-black rounded-md min-w-[90px]">
            <h1 className="">Penghasilan Perbulan</h1>
            <FormGroup className="">
              <RadioGroup
                value={inputs.penghasilan_perbulan}
                name="penghasilan_perbulan"
                onChange={(e) => {
                  handleChange(e);
                }}
              >
                {formPenghasilan.map((gaji) => (
                  <FormControlLabel
                    key={gaji.id}
                    control={<Radio />}
                    label={gaji.title}
                    value={gaji.id}
                  />
                ))}
              </RadioGroup>
            </FormGroup>
          </div>
        </div>

        <div className={`${styles.inputSpan}`}>
          <span>Catatan</span>
          <TextareaAutosize
            className={`resize-none text-sm font-sans font-normal leading-5 px-3 py-2 rounded-lg hover:border 
              focus:border-black focus-visible:outline-0 box-border`}
            aria-label="Catatan"
            minRows={3}
            placeholder="Catatan"
            name="catatan"
            value={inputs.catatan}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <p className={`${styles.fontCaption} mt-2 text-abuGelap`}>
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

export const Tabungan = ({ inputs, handleChange }) => {
  return (
    <div className="">
      <h2 className={`${styles.heading3} mb-4`}>Pengajuan</h2>

      <div
        action=""
        className="grid justify-center gap-4 mx-auto md:grid-cols-x2500"
      >
        <div className="grid w-full sm:grid-cols-2 gap-4">
          <FormControl fullWidth>
            <InputLabel htmlFor="outlined-adornment-amount">
              Total Pinjaman
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">Rp.</InputAdornment>
              }
              label="Total Pinjaman"
              name="total_pinjaman"
              value={inputs.total_pinjaman}
              onChange={handleChange}
              inputProps={{ inputMode: "numeric", pattern: "[0-9,.]*" }}
            />
          </FormControl>

          {formSelectKredit.map((selek) => (
            <FormControl fullWidth key={selek.id}>
              <InputLabel id="demo-simple-select-label">
                {selek.title}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label={selek.title}
                name={selek.name}
                value={inputs[selek.name]}
                onChange={handleChange}
              >
                <MenuItem value={selek.option1}>{selek.option1}</MenuItem>
                <MenuItem value={selek.option2}>{selek.option2}</MenuItem>
                {selek.option3 && (
                  <MenuItem value={selek.option3}>{selek.option3}</MenuItem>
                )}
              </Select>
            </FormControl>
          ))}
        </div>

        <div className=" md:col-[2/3] md:row-[1/3]">
          <div className="form-control bg-abuTerang p-6 border border-black rounded-md min-w-[90px]">
            <h1 className="">Penghasilan Perbulan</h1>
            <FormGroup className="">
              <RadioGroup
                value={inputs.penghasilan_perbulan}
                name="penghasilan_perbulan"
                onChange={(e) => {
                  handleChange(e);
                }}
              >
                {formPenghasilan.map((gaji) => (
                  <FormControlLabel
                    key={gaji.id}
                    control={<Radio />}
                    label={gaji.title}
                    value={gaji.id}
                  />
                ))}
              </RadioGroup>
            </FormGroup>
          </div>
        </div>

        <div className={`${styles.inputSpan}`}>
          <span>Catatan</span>
          <TextareaAutosize
            className={`resize-none text-sm font-sans font-normal leading-5 px-3 py-2 rounded-lg hover:border 
              focus:border-black focus-visible:outline-0 box-border`}
            aria-label="Catatan"
            minRows={3}
            placeholder="Catatan"
            name="catatan"
            value={inputs.catatan}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <p className={`${styles.fontCaption} mt-2 text-abuGelap`}>
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

export const Deposito = ({ inputs, handleChange }) => {
  return (
    <div className="">
      <h2 className={`${styles.heading3} mb-4`}>Pengajuan</h2>

      <div
        action=""
        className="grid justify-center gap-4 mx-auto md:grid-cols-x2500"
      >
        <div className="grid w-full sm:grid-cols-2 gap-4">
          <FormControl fullWidth>
            <InputLabel htmlFor="outlined-adornment-amount">
              Total Pinjaman
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">Rp.</InputAdornment>
              }
              label="Total Pinjaman"
              name="total_pinjaman"
              value={inputs.total_pinjaman}
              onChange={handleChange}
              inputProps={{ inputMode: "numeric", pattern: "[0-9,.]*" }}
            />
          </FormControl>

          {formSelectKredit.map((selek) => (
            <FormControl fullWidth key={selek.id}>
              <InputLabel id="demo-simple-select-label">
                {selek.title}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label={selek.title}
                name={selek.name}
                value={inputs[selek.name]}
                onChange={handleChange}
              >
                <MenuItem value={selek.option1}>{selek.option1}</MenuItem>
                <MenuItem value={selek.option2}>{selek.option2}</MenuItem>
                {selek.option3 && (
                  <MenuItem value={selek.option3}>{selek.option3}</MenuItem>
                )}
              </Select>
            </FormControl>
          ))}
        </div>

        <div className=" md:col-[2/3] md:row-[1/3]">
          <div className="form-control bg-abuTerang p-6 border border-black rounded-md min-w-[90px]">
            <h1 className="">Penghasilan Perbulan</h1>
            <FormGroup className="">
              <RadioGroup
                value={inputs.penghasilan_perbulan}
                name="penghasilan_perbulan"
                onChange={(e) => {
                  handleChange(e);
                }}
              >
                {formPenghasilan.map((gaji) => (
                  <FormControlLabel
                    key={gaji.id}
                    control={<Radio />}
                    label={gaji.title}
                    value={gaji.id}
                  />
                ))}
              </RadioGroup>
            </FormGroup>
          </div>
        </div>

        <div className={`${styles.inputSpan}`}>
          <span>Catatan</span>
          <TextareaAutosize
            className={`resize-none text-sm font-sans font-normal leading-5 px-3 py-2 rounded-lg hover:border 
              focus:border-black focus-visible:outline-0 box-border`}
            aria-label="Catatan"
            minRows={3}
            placeholder="Catatan"
            name="catatan"
            value={inputs.catatan}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <p className={`${styles.fontCaption} mt-2 text-abuGelap`}>
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

export const PickupService = ({ inputs, handleChange }) => {
  return (
    <div>
      <h2 className={`${styles.heading3} mb-4`}>Pengajuan</h2>
      <div className="grid justify-center gap-4 mx-auto md:w-[850px]">
        <div className="grid sm:grid-cols-3 gap-4">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Produk Tabungan
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Produk Tabungan"
              name="produk_tabungan"
              value={inputs.produk_tabungan || ""}
              onChange={handleChange}
            >
              {formSelectTabungan.map((produk) => (
                <MenuItem key={produk.id} value={produk.id}>
                  {produk.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Tentukan Tanggal"
              value={
                inputs.tanggal ? dayjs(inputs.tanggal, "DD/MM/YYYY") : null
              }
              onChange={(newValue) =>
                handleChange({
                  target: {
                    name: "tanggal",
                    value: newValue.format("DD/MM/YYYY"),
                  },
                })
              }
            />
          </LocalizationProvider>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              label="Tentukan Waktu"
              value={inputs.waktu ? dayjs(inputs.waktu, "HH:mm") : null}
              onChange={(newValue) =>
                handleChange({
                  target: { name: "waktu", value: newValue.format("HH:mm") },
                })
              }
            />
          </LocalizationProvider>

          <div className={`${styles.inputSpan} sm:col-span-3`}>
            <span>Lokasi</span>
            <TextareaAutosize
              className="resize-none text-sm font-sans font-normal leading-5 px-3 py-2 rounded-lg 
                  border border-solid border-slate-300 hover:border focus:border-black focus-visible:outline-0 box-border"
              aria-label="Lokasi"
              minRows={3}
              placeholder="Tentukan Lokasi"
              name="lokasi"
              value={inputs.lokasi || ""}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={`${styles.inputSpan}`}>
          <span>Catatan</span>
          <TextareaAutosize
            className="resize-none text-sm font-sans font-normal leading-5 px-3 py-2 rounded-lg 
                  border border-solid border-slate-300 hover:border focus:border-black focus-visible:outline-0 box-border"
            aria-label="Catatan"
            minRows={3}
            placeholder="Catatan"
            name="catatan"
            value={inputs.catatan || ""}
            onChange={handleChange}
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

export const SponsorForm = ({
  inputs,
  handleChange,
  usahaError,
  setUsahaError,
  sponsorError,
  setSponsorError,
  filepdf,
  setFilepdf,
}) => {
  const [fileName, setFileName] = useState("File Tidak Terpilih");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFilepdf(file);
      setFileName(file.name);
    }
  };

  return (
    <div>
      <h2 className={`${styles.heading3} mb-4`}>Pengajuan</h2>
      <div className="grid justify-center gap-4 mx-auto md:w-[850px] md:grid-cols-x2500">
        <div className={`${styles.inputSpan}`}>
          <span className={usahaError ? "text-red-500" : ""}>Nama Usaha</span>
          <TextareaAutosize
            className={`resize-none text-sm font-sans font-normal leading-5 px-3 py-2 rounded-lg 
                  border hover:border-black focus:border-blue-600 focus:border-2 focus-visible:outline-0 
                  box-border ${
                    usahaError
                      ? "border-red-500 hover:border-red-500 text-red-500 focus:border-red-600"
                      : "border-slate-300"
                  }`}
            aria-label="nama usaha"
            minRows={3}
            placeholder="Nama Usaha"
            name="nama_usaha"
            value={inputs.nama_usaha || ""}
            onChange={(e) => {
              handleChange(e);
              setUsahaError(false);
            }}
            required
          />
          {usahaError && (
            <FormHelperText error>Nama usaha perlu diisi</FormHelperText>
          )}
        </div>

        <div
          className={`p-6 border rounded-md md:col-[2/3] md:row-[1/3] ${
            sponsorError ? "border-red-500 text-red-500" : "border-black"
          }`}
        >
          <h1 className="">Jenis Sponsor</h1>
          <FormGroup className="">
            <RadioGroup
              name="jenis_sponsor"
              onChange={(e) => {
                handleChange(e);
                setSponsorError(false);
              }}
            >
              {formJenisSponsor.map((jenis) => (
                <FormControlLabel
                  key={jenis.id}
                  control={<Radio />}
                  label={jenis.title}
                  value={jenis.id}
                  error={sponsorError}
                />
              ))}
            </RadioGroup>cd 
            {sponsorError && (
              <FormHelperText error>pekerjaan perlu diisi</FormHelperText>
            )}
          </FormGroup>
        </div>

        <div className={`${styles.inputSpan}`}>
          <span>Catatan</span>
          <TextareaAutosize
            className={`resize-none text-sm font-sans font-normal leading-5 px-3 py-2 rounded-lg 
                  border hover:border-black focus:border-blue-600 focus:border-2 focus-visible:outline-0 
                  box-border border-slate-300`}
            aria-label="Catatan"
            minRows={3}
            placeholder="Catatan"
            name="catatan"
            value={inputs.catatan || ""}
            onChange={handleChange}
            required
          />
          <p className={`${styles.fontCaption} mt-2`}>
            Mohon mengisi di CATATAN kalo memang ada Informasi Awal yang perlu
            disampaikan kepada kami. Terima kasih telah memberikan kepercayaan
            kepada BPR ARTO MORO Semarang, kami akan segera menghubungi melalui
            No. Handphone Anda.
          </p>
        </div>
      </div>

      <div
        className={`${styles.flexCenter} flex-col w-full h-[200px] mt-4 border-2 border-dashed border-slate-300 cursor-pointer rounded-[5px]`}
        onClick={() => document.querySelector(".input-file").click()}
      >
        <input
          type="file"
          name="pdf"
          onChange={handleFileChange}
          className="input-file"
          hidden
          accept=".pdf" // Membatasi tipe file yang dapat dipilih
        />

        {filepdf ? (
          <embed src={URL.createObjectURL(filepdf)} width={150} height={150} />
        ) : (
          <>
            <FileUploadIcon /> <span>Upload Proposal (opsional)</span>
          </>
        )}
      </div>

      <div className="my-2 flex justify-between items-center py-4 px-5 rounded-[10px] bg-slate-300">
        <PictureAsPdfIcon />
        <span className="flex items-center">
          {fileName} -
          <DeleteIcon
            className="text-merahh-500 cursor-pointer"
            onClick={() => {
              setFileName("Tidak Ada File");
              setFilepdf(null);
            }}
          />
        </span>
      </div>
    </div>
  );
};
