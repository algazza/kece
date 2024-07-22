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

const FormBank = ({ isiPenting }) => {
    return (
        <section className={`${styles.fontBody} mx-14 md:mx-auto `}>
            <form action="" className="grid my-12 gap-6 sm:gap-12">
                <div className="">
                    <h2 className={`${styles.heading3} mb-4 `}>Identitas</h2>

                    <div
                        action=""
                        className="grid gap-4 mx-auto md:grid-cols-x2500"
                    >
                        <div className="grid sm:justify-center w-full sm:grid-cols-2 gap-4">
                            {formIdentitas.map((iden) => (
                                <TextField
                                    id="outlined-basic"
                                    label={iden.title}
                                    key={iden.id}
                                    type={iden.type}
                                    name={iden.id}
                                    variant="outlined"
                                    className="rounded-md"
                                />
                            ))}
                        </div>

                        <div className="form-control bg-abuTerang p-6 border border-black rounded-md md:col-[2/3] md:row-[1/3]">
                            <h1 className="">Pekerjaan</h1>
                            <FormGroup className="">
                                <RadioGroup>
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
                            />
                        </div>
                    </div>
                </div>

                {isiPenting}

                <div>
                    <div className="flex flex-col gap-2">
                        <FormGroup>
                            <FormControlLabel
                                required
                                control={<Checkbox />}
                                label="Dengan ini saya menyetujui penggunaan data
                                diatas untuk pengajuan kredit melalui BPR Arto
                                Moro."
                                className={`${styles.fontBody} `}
                            />
                        </FormGroup>
                        <span>* Pengajuan melalui website ini gratis</span>
                        <span>
                            * Proses analisa dan persetujuan dilakukan bank
                            penyalur KUR
                        </span>
                        <span>
                            * Pastikan no. HP Anda sudah benar dan aktif.
                            Pastikan alamat usaha Anda sudah benar
                        </span>
                    </div>
                </div>

                <input type="hidden" name="_action" value=""/>
                <div className="flex gap-10">
                    <button
                        className={`overflow-hidden relative w-28 p-2 h-12 bg-biruTuwa-500 text-primary border-none rounded-md ${styles.fontBody} font-semibold cursor-pointer z-10 group`}
                    >
                        Ajukan!
                        <span className="absolute w-32 h-32 -top-8 -left-2 bg-primary rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
                        <span className="absolute w-32 h-32 -top-8 -left-2 bg-biruTuwa-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
                        <span className="absolute w-32 h-32 -top-8 -left-2 bg-biruTuwa-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
                        <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
                            Submit!
                        </span>
                    </button>

                    <button
                        className={`overflow-hidden relative w-36 p-2 h-12 text-biruTuwa-500 border-2 border-biruTuwa-500 rounded-md ${styles.fontBody} font-semibold cursor-pointer z-10 group`}
                    >
                        Hubungi Kami
                        <span className="absolute w-40 h-32 -top-9 -left-2 bg-abuTerang rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
                        <span className="absolute w-40 h-32 -top-9 -left-2 bg-biruTuwa-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
                        <span className="absolute w-40 h-32 -top-9 -left-2 bg-biruTuwa-300 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
                        <span className="group-hover:opacity-100 group-hover:duration-1000 group-hover:text-primary duration-100 opacity-0 absolute top-2.5 left-6 z-10">
                            Contact Us
                        </span>
                    </button>
                </div>
            </form>
        </section>
    );
};

export default FormBank;
