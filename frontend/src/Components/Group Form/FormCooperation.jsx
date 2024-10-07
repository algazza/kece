import {
  FormControl,
  FormControlLabel,
  FormGroup,
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
                name={"nama_acara"}
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
                <DatePicker label="Tanggal Awal Acara" name="tanggal_awal"/>
                <span>sampai</span>
                <DatePicker label="Tanggal Akhir Acara" name="tanggal_akhir"/>
              </div>

              <div className={`${styles.inputSpan}`}>
                <SelectMap
                  selectPosition={selectPosition}
                  setSelectPosition={setSelectPosition}
                />
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
                name="file"
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
                  name={"bidang_usaha"}
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
              <SelectMap
                selectPosition={selectPosition}
                setSelectPosition={setSelectPosition}
              />
              <Maps selectPosition={selectPosition} />
            </div>
          </div>

          <div
            className={`${styles.flexCenter} p-4 flex-col w-full h-[250px] mt-4 border-2 border-dashed border-slate-300 cursor-pointer rounded-[5px]`}
            onClick={() => document.querySelector(".input-file").click()}
          >
            <input
              type="file"
              name="file"
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
