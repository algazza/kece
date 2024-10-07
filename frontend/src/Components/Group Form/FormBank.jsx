import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import styles from "../../helper/style.js";
import { formIdentitas, formPekerjaan } from "../../helper/index.js";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Radio,
  RadioGroup,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import { ButtonFull, ButtonOutline } from "../Button.jsx";
import { toast } from "react-toastify";
import PopUp from "../Modal/PopUp.jsx";

const FormBank = ({
  isiPenting,
  value,
  endpoint,
  namaRadio = "pekerjaan",
  judulRadio = "Pekerjaan *",
  dummyprops = formPekerjaan,
}) => {
  const [inputs, setInputs] = useState({});
  const [ip, setIp] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [nameInputs, setNameInputs] = useState("");
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const [nomor, setNomor] = useState("");
  const [nik, setNik] = useState("");
  const [error, setError] = useState("");
  const [alamatError, setAlamatError] = useState(false);
  const [radioError, setRadioError] = useState(false);
  const [checkboxError, setCheckboxError] = useState(false);
  const [usahaError, setUsahaError] = useState(false);
  const [sponsorError, setSponsorError] = useState(false);
  const [filepdf, setFilepdf] = useState(null);

  useEffect(() => {
    setInputs((values) => ({ ...values, jenis: value }));

    axios
      .get("https://api.ipify.org?format=json")
      .then((response) => {
        setIp(response.data.ip);
      })
      .catch((error) => {
        console.error("Error fetching IP address:", error);
      });
  }, [value]);

  const formatRupiah = (value) => {
    const numberString = value.replace(/[^,\d]/g, "");
    const split = numberString.split(",");
    const sisa = split[0].length % 3;
    let rupiah = split[0].substr(0, sisa);
    const ribuan = split[0].substr(sisa).match(/\d{3}/g);

    if (ribuan) {
      const separator = sisa ? "." : "";
      rupiah += separator + ribuan.join(".");
    }

    rupiah = split[1] !== undefined ? rupiah + "," + split[1] : rupiah;
    return rupiah;
  };

  const removeFormatRupiah = (angka) => {
    if (typeof angka === "string") {
      return angka.replace(/[^,\d]/g, "");
    }
    return angka;
  };

  const handleDateChange = (newValue) => {
    setInputs((values) => ({
      ...values,
      tanggal: newValue.format("DD/MM/YYYY"),
    }));
  };

  const handleTimeChange = (newValue) => {
    setInputs((values) => ({ ...values, waktu: newValue.format("HH:mm") }));
  };

  const handleChange = (event) => {
    const name = event.target.name;
    let value = event.target.value;

    if (name === "total_pinjaman" && value) {
      value = formatRupiah(value);
    }

    setInputs((values) => ({ ...values, [name]: value }));
  };

  const generateCode = () => {
    const now = new Date();
    const code = `${Math.floor(now.getMilliseconds() / 10)
      .toString()
      .padStart(2, "0")}${now.getSeconds().toString().padStart(2, "0")}${now
      .getMinutes()
      .toString()
      .padStart(2, "0")}${now.getHours().toString().padStart(2, "0")}${now
      .getDate()
      .toString()
      .padStart(2, "0")}${(now.getFullYear() % 100)
      .toString()
      .padStart(2, "0")}`;
    return code;
  };

  const submitFormSponsor = async () => {
    const codeGenerated = generateCode();
    const updatedInputs = {
      ...inputs,
      code: codeGenerated,
      ip_user: ip,
    };

    const formData = new FormData();

    const fieldsToInclude = [
      "nama",
      "nik",
      "email",
      "alamat",
      "no_handphone",
      "bidang_usaha",
      "nama_usaha",
      "catatan",
      "jenis_sponsor",
      "jenis",
      "ip_user",
      "code",
    ];

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
      const response = await fetch(`${endpoint}`, {
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

  const submitForm = () => {
    const codeGenerated = generateCode();
    const updatedInputs = {
      ...inputs,
      code: codeGenerated,
      ip_user: ip,
      total_pinjaman: removeFormatRupiah(inputs.total_pinjaman),
    };
    const nameGenerated = updatedInputs.nama;
    const emailGenerated = updatedInputs.email;
    const nomorGenerated = updatedInputs.no_handphone;
    const nikGenerated = updatedInputs.nik;

    if (!inputs.alamat) {
      setAlamatError(true);
    } else {
      setAlamatError(false);
    }

    if (!inputs.penghasilan_perbulan) {
      setRadioError(true);
    } else {
      setRadioError(false);
    }

    if (!inputs.checkbox) {
      setCheckboxError(true);
    } else {
      setCheckboxError(false);
    }

    if (!inputs.nama_usaha) {
      setUsahaError(true);
    } else {
      setUsahaError(false);
    }

    if (!inputs.jenis_sponsor) {
      setSponsorError(true);
    } else {
      setSponsorError(false);
    }

    axios
      .post(endpoint, updatedInputs)
      .then((response) => {
        setNameInputs(nameGenerated);
        setCode(codeGenerated);
        setEmail(emailGenerated);
        setNomor(nomorGenerated);
        setNik(nikGenerated);
        setOpenModal(true);
        console.log(updatedInputs);
      })
      .catch((err) => {
        setError("Gagal Memasukkan Data, Mohon Perhatikan Lagi!");
        toast.error("Gagal Memasukkan Data, Mohon Perhatikan Lagi!");
      });
  };

  return (
    <section
      className={`${styles.paddingY} ${styles.flexCenter} mx-14 md:mx-auto`}
    >
      <FormGroup className="grid mb-12 gap-6 sm:gap-12">
        <div className="">
          <h2 className={`${styles.heading3} mb-4 `}>Identitas</h2>

          <div action="" className="grid gap-4 mx-auto md:grid-cols-x2500">
            <div className="grid sm:justify-center w-full sm:grid-cols-2 gap-4">
              {formIdentitas.map((iden) => (
                <TextField
                  id="outlined-basic"
                  label={iden.title}
                  key={iden.id}
                  type={iden.type}
                  name={iden.id}
                  variant="outlined"
                  className="rounded-md outline-none"
                  value={inputs[iden.id]}
                  onChange={handleChange}
                  required
                  error={error && !inputs[iden.id]}
                  helperText={
                    error && !inputs[iden.id] ? `${iden.title} perlu diisi` : ""
                  }
                />
              ))}
            </div>

            <div
              className={`form-control p-6 border rounded-md md:col-[2/3] md:row-[1/3] ${
                radioError ? "border-red-500 text-red-500" : "border-black"
              }`}
            >
              <h1 className="">{judulRadio}</h1>
              <FormGroup className="">
                <RadioGroup
                  name={namaRadio}
                  onChange={(e) => {
                    handleChange(e);
                    setRadioError(false);
                  }}
                >
                  {dummyprops.map((kerja) => (
                    <FormControlLabel
                      key={kerja.id}
                      control={<Radio />}
                      label={kerja.title}
                      value={kerja.id}
                      error={radioError}
                    />
                  ))}
                </RadioGroup>
                {radioError && (
                  <FormHelperText error>pekerjaan perlu diisi</FormHelperText>
                )}
              </FormGroup>
            </div>

            <div className={`${styles.inputSpan}`}>
              <span className={alamatError ? "text-red-500" : ""}>
                Alamat *
              </span>
              <TextareaAutosize
                className={`resize-none text-sm font-sans font-normal leading-5 px-3 py-2 rounded-lg 
                  border hover:border-black focus:border-blue-600 focus:border-2 focus-visible:outline-0 
                  box-border ${
                    alamatError
                      ? "border-red-500 hover:border-red-500 text-red-500 focus:border-red-600"
                      : "border-slate-300"
                  }`}
                aria-label="Alamat"
                minRows={3}
                placeholder="Alamat"
                name="alamat"
                value={inputs.alamat}
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
        </div>

        <input
          type="hidden"
          name="jenis"
          value={inputs.jenis}
          onChange={handleChange}
        />
        <input
          type="hidden"
          name="code"
          value={inputs.code}
          onChange={handleChange}
        />
        <input
          type="hidden"
          name="ip_user"
          value={ip}
          onChange={handleChange}
        />

        <input
          type="hidden"
          name="nomer"
          value={inputs.nomer}
          onChange={handleChange}
        />

        {isiPenting ? (React.cloneElement(isiPenting, {
          inputs,
          usahaError,
          setUsahaError,
          sponsorError,
          setSponsorError,
          filepdf,
          setFilepdf,
          handleChange,
          handleDateChange,
          handleTimeChange,
        })) : null}

        <div>
          <div className="flex flex-col gap-2 ">
            <FormGroup>
              <FormControlLabel
                required
                control={
                  <Checkbox
                    onChange={(e) => {
                      handleChange(e);
                      setCheckboxError(false);
                    }}
                  />
                }
                label="Dengan ini saya menyetujui penggunaan data
                                diatas untuk pengajuan kredit melalui BPR Arto
                                Moro."
                className={`${styles.fontCaption}`}
              />
              {checkboxError && (
                <FormHelperText error>
                  Anda harus menyetujui penggunaan data
                </FormHelperText>
              )}
            </FormGroup>
            <span className="text-merahh-400">
              * Form ini bukan merupakan pengajuan resmi
            </span>
            <span>
              * Proses analisa dan persetujuan dilakukan bank penyalur KUR
            </span>
            <span>
              * Pastikan no. HP Anda sudah benar dan aktif. Pastikan alamat
              usaha Anda sudah benar
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <ButtonFull
            WidthButton="w-36"
            WidthShadow="w-40"
            onClick={value === "Sponsor" ? submitFormSponsor : submitForm}
            // onClick={submitForm}
          >
            Hubungi Kami
          </ButtonFull>
          {error && <p className="text-red-500">{error}</p>}
        </div>

        {openModal && (
          <PopUp
            nama={nameInputs}
            email={email}
            nomor={nomor}
            nik={nik}
            code={code}
            jenis={value}
            setOpenModal={setOpenModal}
            openModal={openModal}
          />
        )}
      </FormGroup>
    </section>
  );
};

export default FormBank;
