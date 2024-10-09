import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import styles from "../../helper/style";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  formIdentitas,
  formJenisSponsor,
  formUsahaSponsor,
} from "../../helper";
import { useEffect, useState } from "react";
import { ButtonFull } from "../Button";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import axios from "axios";
import { localhostLink } from "../../helper/localhost";
import PopUpCoop from "../Modal/PopUpCoop";
import { toast } from "react-toastify";

export const FormSponsor = () => {
  const [fileName, setFileName] = useState("File Tidak Terpilih");
  const [filepdf, setFilepdf] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFilepdf(file);
      setFileName(file.name);
    }
  };

  return (
    <section
      className={`${styles.paddingY} ${styles.flexCenter} mx-14 md:mx-auto`}
    >
      <FormGroup className="grid mb-12 gap-6 sm:gap-12">
        <div className="">
          <h2 className={`${styles.heading3} mb-4 `}>Identitas</h2>

          <div className="grid sm:grid-cols-3 gap-4">
            {formIdentitas.slice(0, 3).map((iden) => (
              <TextField
                id="outlined-basic"
                label={iden.title}
                key={iden.id}
                type={iden.type}
                name={iden.id}
                variant="outlined"
                className="rounded-md outline-none"
                required
                // value={inputs[iden.id]}
                // onChange={handleChange}
                // error={error && !inputs[iden.id]}
                // helperText={
                //   error && !inputs[iden.id] ? `${iden.title} perlu diisi` : ""
                // }
              />
            ))}
          </div>
        </div>

        <div className="">
          <h2 className={`${styles.heading3} mb-4`}>Pengajuan</h2>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateRangePicker"]}>
              <TextField
                id="outlined-basic"
                label={"Nama Acara"}
                type={"text"}
                name={"nama acara"}
                variant="outlined"
                className="rounded-md outline-none"
                required
                // value={inputs[iden.id]}
                // onChange={handleChange}
                // error={error && !inputs[iden.id]}
                // helperText={
                //   error && !inputs[iden.id] ? `${iden.title} perlu diisi` : ""
                // }
              />

              <div className="flex flex-col sm:flex-row justify-between gap-2 items-center">
                <DatePicker label="Tanggal Awal Acara" />
                <span className="md:block hidden">sampai</span>
                <DatePicker label="Tanggal Akhir Acara" />
              </div>

              <div className={`${styles.inputSpan}`}>
              {/* <span className={alamatError ? "text-red-500" : ""}>
                Lokasi *
              </span> */}
              <TextareaAutosize
                className={`resize-none text-sm font-sans font-normal leading-5 px-3 py-2 rounded-lg 
                  border hover:border-black focus:border-blue-600 focus:border-2 focus-visible:outline-0 
                  box-border`}
                aria-label="Lokasi"
                minRows={3}
                placeholder="Lokasi"
                name="lokasi"
                // value={inputs.lokasi}
                // onChange={(e) => {
                //   handleChange(e);
                //   setAlamatError(false);
                // }}
                required
              />
              {/* {alamatError && (
                <FormHelperText error>Alamat perlu diisi</FormHelperText>
              )} */}
            </div>
            </DemoContainer>
          </LocalizationProvider>

          <div>
            <div
              className={`${styles.flexCenter} p-4 flex-col w-full h-[250px] mt-4 border-2 border-dashed border-slate-300 cursor-pointer rounded-[5px]`}
              onClick={() => document.querySelector(".input-file").click()}
            >
              <input
                type="file"
                name="pdf"
                onChange={handleFileChange}
                className="input-file"
                hidden
                // accept=".pdf, .png"
              />

              {filepdf ? (
                <embed
                  src={URL.createObjectURL(filepdf)}
                  className="w-full h-full"
                />
              ) : (
                <>
                  <FileUploadIcon /> <span>Upload Proposal</span>
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
              // value={inputs.catatan || ""}
              // onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <ButtonFull
            WidthButton="w-36"
            WidthShadow="w-40"
            // onClick={value === "Sponsor" ? submitFormSponsor : submitForm}
            // onClick={submitForm}
          >
            Hubungi Kami
          </ButtonFull>
          {/* {error && <p className="text-red-500">{error}</p>} */}
        </div>
      </FormGroup>
    </section>
  );
};

export const FormBranding = () => {
  const [inputs, setInputs] = useState({});
  const [nameInputs, setNameInputs] = useState("");
  const [email, setEmail] = useState("");
  const [nomor, setNomor] = useState("");
  const [error, setError] = useState("");
  const [usahaError, setUsahaError] = useState(false);
  const [bidangError, setBidangError] = useState(false);
  const [sponsorError, setSponsorError] = useState(false);
  const [alamatError, setAlamatError] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [filepdf, setFilepdf] = useState(null);
  const [fileName, setFileName] = useState("File Tidak Terpilih");

  const value = "Branding";

  useEffect(() => {
    setInputs((values) => ({ ...values, jenis: value }));
  }, [value]);

  const handleChange = (event) => {
    const name = event.target.name;
    let value = event.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  const submitFormSponsor = async () => {
    const updatedInputs = {
      ...inputs,
    };

    const nameGenerated = updatedInputs.nama;
    const emailGenerated = updatedInputs.email;
    const nomorGenerated = updatedInputs.no_handphone;

    if (!inputs.lokasi) {
      setAlamatError(true);
    } else {
      setAlamatError(false);
    }

    if (!inputs.penghasilan_perbulan) {
      setUsahaError(true);
    } else {
      setUsahaError(false);
    }

    if (!inputs.checkbox) {
      setBidangError(true);
    } else {
      setBidangError(false);
    }

    if (!inputs.jenis_sponsor) {
      setSponsorError(true);
    } else {
      setSponsorError(false);
    }

    const formData = new FormData();

    const fieldsToInclude = [
      "nama",
      "email",
      "no_handphone",
      "nama_usaha",
      "bidang_usaha",
      "jenis_sponsor",
      "lokasi",
      "file",
      "catatan",
    ];

    axios
      .post(`${localhostLink}/api/branding`, updatedInputs)
      .then((response) => {
        setNameInputs(nameGenerated);
        setEmail(emailGenerated);
        setNomor(nomorGenerated);
        setOpenModal(true);
        console.log(updatedInputs);
      })
      .catch((err) => {
        setError("Gagal Memasukkan Data, Mohon Perhatikan Lagi!");
        toast.error("Gagal Memasukkan Data, Mohon Perhatikan Lagi!");
      });

    fieldsToInclude.forEach((field) => {
      if (updatedInputs[field] !== undefined && updatedInputs[field] !== null) {
        formData.append(field, updatedInputs[field]);
      }
    });

    if (filepdf) {
      console.log("Appending file:", filepdf);
      formData.append("pdf", filepdf);
    }

    for (const pair of formData.entries()) {
      console.log(
        `Field: ${pair[0]}, Value: ${
          pair[1] instanceof File ? pair[1].name : pair[1]
        }`
      );
    }

    try {
      const response = await fetch(`${localhostLink}/api/branding`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Success:", result);
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFilepdf(file);
      setFileName(file.name);
    }
  };

  return (
    <section
      className={`${styles.paddingY} ${styles.flexCenter} mx-14 md:mx-auto`}
    >
      <FormGroup className="grid mb-12 gap-6 sm:gap-12">
        <div className="">
          <h2 className={`${styles.heading3} mb-4 `}>Identitas</h2>

          <div className="grid sm:grid-cols-3 gap-4">
            {formIdentitas.slice(0, 3).map((iden) => (
              <TextField
                id="outlined-basic"
                label={iden.title}
                key={iden.id}
                type={iden.type}
                name={iden.id}
                variant="outlined"
                className="rounded-md outline-none"
                required
                value={inputs[iden.id]}
                onChange={handleChange}
                error={error && !inputs[iden.id]}
                helperText={
                  error && !inputs[iden.id] ? `${iden.title} perlu diisi` : ""
                }
              />
            ))}
          </div>
        </div>

        <div className="">
          <h2 className={`${styles.heading3} mb-4`}>Pengajuan</h2>

          <div
            action=""
            className="grid justify-center gap-4 mx-auto md:grid-cols-x2500"
          >
            <div className="grid w-full sm:grid-cols-2 gap-4">
              <TextField
                id="outlined-basic"
                label={"Nama Unit Usaha"}
                type={"text"}
                name={"nama_usaha"}
                variant="outlined"
                className="rounded-md outline-none"
                required
                value={inputs.nama_usaha}
                onChange={handleChange}
                error={usahaError && !inputs.nama_usaha}
                helperText={
                  usahaError && !inputs.nama_usaha
                    ? "nama usaha perlu diisi"
                    : ""
                }
              />

              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Bidang Usaha
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label={"Bidang Usaha"}
                  name={"bidang_usaha"}
                  required
                  value={inputs.bidang_usaha}
                  onChange={(e) => {
                    handleChange(e);
                    setBidangError(false);
                  }}
                  error={bidangError}
                >
                  {formUsahaSponsor.map((usaha) => (
                    <MenuItem key={usaha.id} value={usaha.title}>
                      {usaha.title}
                    </MenuItem>
                  ))}
                </Select>
                {sponsorError && (
                  <FormHelperText error>pekerjaan perlu diisi</FormHelperText>
                )}
              </FormControl>
            </div>

            <div
              className={`form-control p-6 border rounded-md md:col-[2/3] md:row-[1/3] ${
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
                </RadioGroup>
                {sponsorError && (
                  <FormHelperText error>pekerjaan perlu diisi</FormHelperText>
                )}
              </FormGroup>
            </div>

            <div className={`${styles.inputSpan}`}>
              <span className={alamatError ? "text-red-500" : ""}>
                Lokasi *
              </span>
              <TextareaAutosize
                className={`resize-none text-sm font-sans font-normal leading-5 px-3 py-2 rounded-lg 
                  border hover:border-black focus:border-blue-600 focus:border-2 focus-visible:outline-0 
                  box-border ${
                    alamatError
                      ? "border-red-500 hover:border-red-500 text-red-500 focus:border-red-600"
                      : "border-slate-300"
                  }`}
                aria-label="Lokasi"
                minRows={3}
                placeholder="Lokasi"
                name="lokasi"
                value={inputs.lokasi}
                onChange={(e) => {
                  handleChange(e);
                  setAlamatError(false);
                }}
                required
              />
              {alamatError && (
                <FormHelperText error>Alamat perlu diisi</FormHelperText>
              )}
            </div>
          </div>

          <div>
            <div
              className={`${styles.flexCenter} p-4 flex-col w-full h-[250px] mt-4 border-2 border-dashed border-slate-300 cursor-pointer rounded-[5px]`}
              onClick={() => document.querySelector(".input-file").click()}
            >
              <input
                type="file"
                name="pdf"
                onChange={handleFileChange}
                className="input-file"
                hidden
                // accept=".pdf, .png"
              />

              {filepdf ? (
                <embed
                  src={URL.createObjectURL(filepdf)}
                  className="w-full h-full"
                />
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
          </div>
        </div>

        <div className="flex items-center gap-4">
          <ButtonFull
            WidthButton="w-36"
            WidthShadow="w-40"
            onClick={submitFormSponsor}
          >
            Hubungi Kami
          </ButtonFull>
          {error && <p className="text-red-500">{error}</p>}
        </div>

        {openModal && (
          <PopUpCoop
            nama={nameInputs}
            email={email}
            nomor={nomor}
            jenis={value}
            setOpenModal={setOpenModal}
            openModal={openModal}
          />
        )}
      </FormGroup>
    </section>
  );
};
