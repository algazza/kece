import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import styles from "../data/style";
import { formIdentitas, formPekerjaan } from "../data/index";
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

const FormBank = ({ isiPenting, value, endpoint }) => {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    setInputs((values) => ({ ...values, jenis: value }));
  }, [value]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

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

  const submitForm = () => {
    const code = generateCode();
    const updatedInputs = { ...inputs, code };
    axios
      .post(endpoint, updatedInputs)
      .then((response) => {
        navigate("/succes");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("gagal");
      });
  };

  return (
    <section className={`${styles.fontBody} mx-14 md:mx-auto `}>
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
                />
              ))}
            </div>

            <div className="form-control bg-abuTerang p-6 border border-black rounded-md md:col-[2/3] md:row-[1/3]">
              <h1 className="">Pekerjaan</h1>
              <FormGroup className="">
                <RadioGroup name="pekerjaan" onChange={handleChange}>
                  {formPekerjaan.map((kerja) => (
                    <FormControlLabel
                      key={kerja.id}
                      control={<Radio />}
                      label={kerja.title}
                      value={kerja.id}
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

        {React.cloneElement(isiPenting, { inputs, handleChange })}

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
          <ButtonFull onClick={submitForm}>Ajukan!</ButtonFull>

          <ButtonOutline href="/">Hubungi Kami</ButtonOutline>
        </div>
      </FormGroup>
    </section>
  );
};

export default FormBank;
