import {
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
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
import { useState } from "react";
import { ButtonFull } from "../Button";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import SelectMap from "../../Layouts/SelectMap";
import Maps from "../../Layouts/Maps";

export const FormSponsor = () => {
  const [fileName, setFileName] = useState("File Tidak Terpilih");
  const [filepdf, setFilepdf] = useState(null);
  const [selectPosition, setSelectPosition] = useState(null);


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

              <div className="flex justify-between items-center">
                <DatePicker label="Tanggal Awal Acara" />
                <span>sampai</span>
                <DatePicker label="Tanggal Akhir Acara" />
              </div>

              <div className={`${styles.inputSpan}`}>
                <SelectMap selectPosition={selectPosition} setSelectPosition={setSelectPosition}/>
                <Maps selectPosition={selectPosition} />

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

          <div
            action=""
            className="grid justify-center gap-4 mx-auto md:grid-cols-x2500"
          >
            <div className="grid w-full sm:grid-cols-2 gap-4">
              <TextField
                id="outlined-basic"
                label={"Nama Unit Usaha"}
                type={"text"}
                name={"nama usaha"}
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

              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Bidang Usaha
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label={"Bidang Usaha"}
                  name={"bidang usaha"}
                  // value={inputs[selek.name]}
                  // onChange={handleChange}
                >
                  {formUsahaSponsor.map((usaha) => (
                    <MenuItem key={usaha.id} value={usaha.title}>
                      {usaha.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            <div className="p-6 border rounded-md md:col-[2/3] md:row-[1/3] border-black">
              <h1 className="">Jenis Sponsor</h1>
              <FormGroup className="">
                <RadioGroup
                  name="jenis_sponsor"
                  //   onChange={(e) => {
                  //     handleChange(e);
                  //     setSponsorError(false);
                  //   }}
                >
                  {formJenisSponsor.map((jenis) => (
                    <FormControlLabel
                      key={jenis.id}
                      control={<Radio />}
                      label={jenis.title}
                      value={jenis.id}
                      //   error={sponsorError}
                    />
                  ))}
                </RadioGroup>
                {/* {sponsorError && (
                    <FormHelperText error>pekerjaan perlu diisi</FormHelperText>
                  )} */}
              </FormGroup>
            </div>

            <div className={`${styles.inputSpan}`}>
              <TextField
                id="outlined-basic"
                label={"Lokasi"}
                type={"text"}
                name={"nama usaha"}
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
              <div className="w-full">
                <iframe
                  className="rounded-lg w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.726844710513!2d110.46356827504492!3d-7.041353492960724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708d4a93de1f07%3A0xc0c45f754cb4c6!2sBank%20Bpr%20Arto%20Moro!5e0!3m2!1sid!2sid!4v1722830824389!5m2!1sid!2sid"
                  style={{ marginRight: 3 + "em" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

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
