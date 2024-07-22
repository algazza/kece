import { formPenghasilan, formSelectKredit } from "@/data";
import styles from "@/data/style";
import {
    FormControl,
    FormControlLabel,
    FormGroup,
    Input,
    InputAdornment,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Radio,
    RadioGroup,
    Select,
    TextareaAutosize,
} from "@mui/material";
import React from "react";

const Kredit = () => {
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
                                <InputAdornment position="start">
                                    Rp.
                                </InputAdornment>
                            }
                            label="Total Pinjaman"
                            type="number"
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
                            >
                                <MenuItem value={selek.option1}>
                                    {selek.option1}
                                </MenuItem>
                                <MenuItem value={selek.option2}>
                                    {selek.option2}
                                </MenuItem>
                                {selek.option3 && (
                                    <MenuItem value={selek.option3}>
                                        {selek.option3}
                                    </MenuItem>
                                )}
                            </Select>
                        </FormControl>
                    ))}
                </div>

                <div className=" md:col-[2/3] md:row-[1/3]">
                    <FormControl fullWidth sx={{ mb: 2 }}>
                        <InputLabel id="demo-simple-select-label">
                            Bunga Pertahun
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label={"Bunga Pertahun"}
                        >
                            <MenuItem value={"10%"}>10%</MenuItem>
                            <MenuItem value={"15%"}>15%</MenuItem>
                            <MenuItem value={"5%"}>5%</MenuItem>
                        </Select>
                    </FormControl>

                    <div className="form-control bg-abuTerang p-6 border border-black rounded-md min-w-[90px]">
                        <h1 className="">Penghasilan Perbulan</h1>
                        <FormGroup className="">
                            <RadioGroup>
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
                        className="resize-none text-sm font-normal font-sans leading-normal p-3 rounded-md rounded-br focus-visible:outline-0 box-border"
                        aria-label="Catatan"
                        minRows={3}
                        placeholder="Catatan"
                    />
                    <p className={`${styles.fontCaption} mt-2`}>
                        Mohon mengisi di CATATAN kalo memang ada Informasi Awal
                        yang perlu disampaikan kepada kami. Terima kasih telah
                        memberikan kepercayaan kepada BPR ARTO MORO Semarang,
                        kami akan segera menghubungi melalui No. Handphone Anda.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Kredit;
