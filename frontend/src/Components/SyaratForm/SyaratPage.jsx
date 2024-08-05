import { sample } from "../../data";
import styles from "../../data/style";
import Footer from "../../Layouts/Footer";
import IntroBanner from "../../Layouts/IntroBanner";
import TitleBlueBanner from "../../Layouts/TitleBlueBanner";

const SyaratPage = () => {
    return (
        <>
            <div className="">
                <IntroBanner
            ImageBanner={sample}
            TitleBanner={"Syarat"}
            DescriptionBanner={`
                Selamat datang di BPR Arto Moro, solusi finansial terpercaya untuk
                memenuhi berbagai kebutuhan Anda. Kami memahami bahwa setiap individu
                dan usaha memiliki kebutuhan yang unik, oleh karena itu kami
                menawarkan berbagai produk kredit yang dapat disesuaikan dengan
                keperluan Anda.
            `}
                />
                <TitleBlueBanner
                title={"Syarat"}
                />
            </div>
            <div className="h-auto mx-10 mt-10 bg-abuTerang p-10 rounded-lg">
                <h3 className={`${styles.heading3} mb-10`}>Kredit Umum</h3>
                <div>
                    <ul className={`${styles.heading6Normal} font-semibold text-abuGelap`}>
                        <li className={`${styles.heading5} mb-5  ml-10 list-decimal`}>Kredit Progana Ceria</li>
                        <div className="pl-16">
                        <ul className="list-disc ">
                            <li >Kredit Progana Ceria adalah produk kredit unggulan yang dapat dinikmati secara cepat oleh para pegawai seperti Pegawai Negeri Sipil, Anggota TNI, Anggota Polri dan pegawai lainnya yang telah menjalin Kerjasama dengan Bank Eka</li>
                            <li>Keunggulan</li>
                        </ul>
                        <ul className="list-decimal pl-5">
                            <li className="" >Suku bunga anuitas</li>
                            <li className="" >Jumlah maksimal plafon kredit sampai dengan Rp 250.000.000,- (dua ratus juta ribu rupiah)</li>
                            <li className="" >Jumlah maksimal jangka waktu 25 (dua puluh lima) tahun atau selama 300 (tiga ratus bulan) bulan</li>
                        </ul>
                        </div>

                        <li className={`${styles.heading5} mb-5 mt-16 ml-10 list-decimal`}>Kredit Progana</li>
                        <div className="pl-16">    
                        <ul className="list-disc">
                            <li>Kredit Progana Ceria adalah produk kredit unggulan yang dapat dinikmati secara cepat oleh para pegawai seperti Pegawai Negeri Sipil, Anggota TNI, Anggota Polri dan pegawai lainnya yang telah menjalin Kerjasama dengan Bank Eka.</li>
                            <li>Jumlah maksimal plafon kredit sampai dengan Rp 250.000.000,- (dua ratus juta ribu rupiah)</li>
                        </ul>
                        </div>

                        <li className={`${styles.heading5} mb-5 mt-16 ml-10 list-decimal`}>Syarat pembukaan rekening kredit pegawai</li>
                        <div className="pl-16">    
                        <ul className="list-disc">
                            <li>Kredit Progana Ceria adalah produk kredit unggulan yang dapat dinikmati secara cepat oleh para pegawai seperti Pegawai Negeri Sipil, Anggota TNI, Anggota Polri dan pegawai lainnya yang telah menjalin Kerjasama dengan Bank Eka.</li>
                            <li>Jumlah maksimal plafon kredit sampai dengan Rp 250.000.000,- (dua ratus juta ribu rupiah)</li>
                            <ul className="list-decimal pl-5">
                                <li>KTP Asli</li>
                                <li>Fotocopy KTP calon nasabah dan pasangan</li>
                                <li>Fotokopi kartu keluarga</li>
                                <li>Fotokopi gaji terlegalisir</li>
                            </ul>
                            <li>Jumlah maksimal plafon kredit sampai dengan Rp 250.000.000,- (dua ratus juta ribu rupiah)</li>
                        </ul>
                        </div>
                    </ul>
                </div>

                <div className="flex gap-10 mt-16">
                    <button
                        className={`overflow-hidden relative w-28 p-2 h-12 bg-biruTuwa-500 text-primary border-none rounded-md ${styles.fontBody} font-semibold cursor-pointer z-10 group`} 
                    >
                        Ajukan!
                        <span className="absolute w-32 h-32 -top-8 -left-2 bg-primary rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
                        <span className="absolute w-32 h-32 -top-8 -left-2 bg-biruTuwa-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
                        <span className="absolute w-32 h-32 -top-8 -left-2 bg-biruTuwa-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
                        <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
                        Ajukan!
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
                        Hubungi Kami
                        </span>
                    </button>
                </div>
            </div>
            <Footer />
        </> // Mahes (1 agustus 2024)
        


    );
};

export default SyaratPage;