// ======================== IMAGE ===========================
import logoArmor from "../img/LOGO-AM-CORAL-BARU.svg";
import sample from "../img/sampleimage.svg";
import partnerImage1 from "../img/partnerImage1.svg";
import partnerImage2 from "../img/partnerImage2.svg";
import partnerImage3 from "../img/partnerImage3.svg";
import partnerImage4 from "../img/partnerImage4.svg";
import partnerImage5 from "../img/partnerImage5.svg";
import partnerImage6 from "../img/partnerImage6.svg";
import partnerImage7 from "../img/partnerImage7.svg";

export {
    logoArmor,
    sample,
    partnerImage1,
    partnerImage2,
    partnerImage3,
    partnerImage4,
    partnerImage5,
    partnerImage6,
    partnerImage7,
};

// =========================== FORM ====================
export const formIdentitas = [
  {
    id: "nama",
    title: "Name",
    type: "text",
  },
  {
    id: "email",
    title: "Email",
    type: "email",
  },
  {
    id: "no_handphone",
    title: "No. Handphone",
    type: "number",
  },
  {
    id: "nik",
    title: "NIK",
    type: "number",
  },
];

export const formPekerjaan = [
  {
    id: "wirausaha",
    title: "Wirausaha",
  },
  {
    id: "karyawan",
    title: "Karyawan Swasta",
  },
  {
    id: "asn",
    title: "ASN(PNS)",
  },
  {
    id: "nganggur",
    title: "Tidak Bekerja",
  },
  {
    id: "lainnya",
    title: "Lainnya",
  },
];

export const formPenghasilan = [
  {
    id: "5 Juta",
    title: "5 Juta",
  },
  {
    id: "5 - 10 Juta",
    title: "5 - 10 Juta",
  },
  {
    id: "10 -15 Juta",
    title: "10 - 15 Juta",
  },
  {
    id: "> 15 Juta",
    title: ">15 Juta",
  },
];

export const formSelectKredit = [
  {
    id: "waktu",
    title: "Jangka Waktu",
    placeholder: "Tentukan Tenor",
    option1: "1 bulan",
    option2: "3 bulan",
    option3: "6 bulan",
    name: "jangka_waktu",
  },
  {
    id: "angunan",
    title: "Jenis Angunan",
    placeholder: "Pilih...",
    option1: "Tanah & Bangunan Permanen",
    option2: "Tanah Kosong",
    name: "jenis_angunan",
  },
  {
    id: "bunga",
    title: "Perhitungan Bunga",
    placeholder: "Tentukan Tenor",
    option1: "Flat",
    option2: "Anuitas",
    option3: "Efektif",
    name: "perhitungan_bunga",
  },
];

export const formSelectTabungan = [
  {
    id: "tasbam",
    title: "Tasbam",
  },
  {
    id: "pro",
    title: "Tabnungan Pro Aktive",
  },
  {
    id: "lainnya",
    title: "Tabungan Lainnya",
  },
];

// ===================== FOOTER ========================
export const marqueeImage = [
  { id: "1", image: partnerImage1 },
  { id: "2", image: partnerImage2 },
  { id: "3", image: partnerImage3 },
  { id: "4", image: partnerImage4 },
  { id: "5", image: partnerImage5 },
  { id: "6", image: partnerImage6 },
  { id: "7", image: partnerImage7 },
];

export const footer1 = [
  {
    id: "1",
    title: "Tentang Kami",
    link: "/tentangkami",
  },
  {
    id: "2",
    title: "Kebijakan Privasi",
    link: "/kebijakanprivasi",
  },
  {
    id: "3",
    title: "GCG",
    link: "/gcg",
  },
];

export const footer2 = [
  {
    id: "1",
    title: "Lokasi Kami",
    link: "/lokasikmau",
  },
  {
    id: "2",
    title: "Hubungi Kami",
    link: "/hubungikami",
  },
];