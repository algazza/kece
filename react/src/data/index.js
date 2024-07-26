// ======================= HEADER =========================

// =========================== FORM ====================
export const formIdentitas= [
    {
        id: "name",
        title: "Name",
        type: "text"
    },
    {
        id: "email",
        title: "Email",
        type: "email"
    },
    {
        id: "no_handphone",
        title: "No. Handphone",
        type: "number"
    },
    {
        id: "nik",
        title: "NIK",
        type: "number"
    },
]

export const formPekerjaan=[
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
]

export const formPenghasilan=[
    {
        id: "normal",
        title: "5 Juta",
    },
    {
        id: "lehuga",
        title: "5 - 10 Juta",
    },
    {
        id: "orkay",
        title: "10 - 15 Juta",
    },
    {
        id: "sugih",
        title: ">15 Juta",
    },
]

export const formTrueorFalse=[
    {
        id: "name",
        status: true
    }
]

export const formSelectKredit= [
    {
        id: "waktu",
        title: "Jangka Waktu",
        placeholder: "Tentukan Tenor",
        option1: "1 bulan",
        option2: "3 bulan",
        option3: "6 bulan",
        name: "jangka_waktu"
    },
    {
        id: "angunan",
        title: "Jenis Angunan",
        placeholder: "Pilih...",
        option1: "Tanah & Bangunan Permanen",
        option2: "Tanah Kosong",
        name: "jenis_angunan"
    },
    {
        id: "bunga",
        title: "Perhitungan Bunga",
        placeholder: "Tentukan Tenor",
        option1: "Flat",
        option2: "Anuitas",
        option3: "Efektif",
        name: "bunga"
    },
]

export const formSelectTabungan = [
    {
        id: "tasbam",
        title: "Tasbam"
    },
    {
        id: "pro",
        title: "Tabnungan Pro Aktive"
    },
    {
        id: "lainnya",
        title: "Tabungan Lainnya"
    },
]

// ===================== FOOTER ========================
export const footer1= [
    {
        id: "1",
        title: "Tentang Kami",
        link: "/tentangkami"
    },
    {
        id: "2",
        title: "Kebijakan Privasi",
        link: "/kebijakanprivasi"
    },
    {
        id: "3",
        title: "GCG",
        link: "/gcg"
    },
]

export const footer2= [
    {
        id: "1",
        title: "Lokasi Kami",
        link: "/lokasikmau"
    },
    {
        id: "2",
        title: "Hubungi Kami",
        link: "/hubungikami"
    },
]