import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import styles from "../helper/style";
import { formIdentitas, formPekerjaan } from "../helper/index";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import { ButtonFull, ButtonOutline } from "./Button";
import { toast } from "react-toastify";
import PopUp from "./PopUp";

const FormBank = ({
  isiPenting,
  value,
  endpoint,
  nomer,
  namaRadio = "pekerjaan",
  judulRadio = "Pekerjaan",
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

  useEffect(() => {
    setInputs((values) => ({ ...values, jenis: value, nomer: nomer }));

    axios
      .get("https://api.ipify.org?format=json")
      .then((response) => {
        setIp(response.data.ip);
      })
      .catch((error) => {
        console.error("Error fetching IP address:", error);
      });
  }, [value, nomer]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
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

  const submitForm = () => {
    const codeGenerated = generateCode();
    const updatedInputs = { ...inputs, code: codeGenerated, ip_user: ip };
    const nameGenerated = updatedInputs.nama;
    const emailGenerated = updatedInputs.email;
    const nomorGenerated = updatedInputs.no_handphone;
    const nikGenerated = updatedInputs.nik;

    axios
      .post(endpoint, updatedInputs)
      .then((response) => {
        setNameInputs(nameGenerated);
        setCode(codeGenerated);
        setEmail(emailGenerated);
        setNomor(nomorGenerated);
        setNik(nikGenerated);
        setOpenModal(true);
      })
      .catch((err) => {
        toast.error("Gagal Memasukkan Data, Mohon Perhatikan Lagi!");
      });
  };

  return (
    <section
      className={`${styles.fontBody} mx-14 md:mx-auto ${styles.paddingY} ${styles.flexCenter}`}
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
                />
              ))}
            </div>

            <div className="form-control bg-abuTerang p-6 border border-black rounded-md md:col-[2/3] md:row-[1/3]">
              <h1 className="">{judulRadio}</h1>
              <FormGroup className="">
                <RadioGroup name={namaRadio} onChange={handleChange}>
                  {dummyprops.map((kerja) => (
                    <FormControlLabel
                      key={kerja.id}
                      control={<Radio />}
                      label={kerja.title}
                      value={kerja.id}
                      required
                    />
                  ))}
                </RadioGroup>
              </FormGroup>
            </div>

            <div className={`${styles.inputSpan}`}>
              <span>Alamat</span>
              <TextareaAutosize
                className="resize-none text-sm font-sans font-normal leading-5 px-3 py-2 rounded-lg 
                          border border-solid border-slate-300 hover:border focus:border-black focus-visible:outline-0 box-border"
                aria-label="Alamat"
                minRows={3}
                placeholder="Alamat"
                name="alamat"
                value={inputs.alamat}
                onChange={handleChange}
                required
              />
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

        {React.cloneElement(isiPenting, {
          inputs,
          handleChange,
          handleDateChange,
          handleTimeChange,
        })}

        <div>
          <div className="flex flex-col gap-2 ">
            <FormGroup>
              <FormControlLabel
                required
                control={<Checkbox />}
                label="Dengan ini saya menyetujui penggunaan data
                                diatas untuk pengajuan kredit melalui BPR Arto
                                Moro."
                className={`${styles.fontCaption}`}
              />
            </FormGroup>
            <span>* Pengajuan melalui website ini gratis</span>
            <span>
              * Proses analisa dan persetujuan dilakukan bank penyalur KUR
            </span>
            <span>
              * Pastikan no. HP Anda sudah benar dan aktif. Pastikan alamat
              usaha Anda sudah benar
            </span>
          </div>
        </div>

        <div className="flex gap-10">
          <ButtonFull
            WidthButton="w-36"
            WidthShadow="w-40"
            onClick={submitForm}
          >
            Hubungi Kami
          </ButtonFull>
        </div>

        {openModal && (
          <PopUp
            nama={nameInputs}
            email={email}
            nomor={nomor}
            nik={nik}
            code={code}
            nomer={nomer}
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
