import { BlueBanner } from "../data";
import styles from "../data/style";
import Footer from "../Layouts/Footer";
import Header from "../Layouts/Header";
import IntroBanner from "../Layouts/IntroBanner";
import TitleBlueBanner from "../Layouts/TitleBlueBanner";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';


const KreditMenu = () => {
    return (
        <>
        <Header />
            <main>
                <section className="">
                    <IntroBanner
                        ImageBanner={BlueBanner}
                        TitleBanner={"Kredit"}
                        DescriptionBanner={`
                        Selamat datang di BPR Arto Moro, solusi finansial terpercaya untuk
                        memenuhi berbagai kebutuhan Anda. Kami memahami bahwa setiap individu
                        dan usaha memiliki kebutuhan yang unik, oleh karena itu kami
                        menawarkan berbagai produk kredit yang dapat disesuaikan dengan
                        keperluan Anda.
                        `}
                    />
                    <TitleBlueBanner title={"Kredit"} />
                </section>

                <section className="">
                            {/* filter button  click */}
                    <div className=" flex gap-3 justify-center m-10">
                        <div className={`${styles.fontBody} font-semibold bg-biruMuda-500 p-3 rounded-lg text-white`}>Datang Ke bank</div>
                        <div className={`${styles.fontBody} font-semibold border-2 border-biruMuda-500 p-3 rounded-lg text-biruMuda-500`}>Via online</div>
                    </div>

                            {/* menu button */}
                    <div className="grid grid-rows-3 grid-flow-col gap-8 justify-center">

                        <div className="bg-abuTerang  drop-shadow-lg rounded-lg p-5 w-72 flex flex-col items-center align-middle text-center ">
                            <TrendingUpIcon className="m-2 text-blue-400 text-5xl" />
                            <h6 className={`${styles.heading6}`}>Kredit</h6>
                            <p className="mt-4">panduan perilaku dan prinsip moral bagi karyawan bank.</p>
                        </div>

                        <div className="bg-abuTerang  drop-shadow-lg rounded-lg p-5 w-72 flex flex-col items-center align-middle text-center ">
                            <TrendingUpIcon className="m-2 text-blue-400 text-5xl" />
                            <h6 className={`${styles.heading6}`}>Kredit</h6>
                            <p className="mt-4">panduan perilaku dan prinsip moral bagi karyawan bank.</p>
                        </div>

                        <div className="bg-abuTerang  drop-shadow-lg rounded-lg p-5 w-72 flex flex-col items-center align-middle text-center ">
                            <TrendingUpIcon className="m-2 text-blue-400 text-5xl" />
                            <h6 className={`${styles.heading6}`}>Kredit</h6>
                            <p className="mt-4">panduan perilaku dan prinsip moral bagi karyawan bank.</p>
                        </div>

                        <div className="bg-abuTerang  drop-shadow-lg rounded-lg p-5 w-72 flex flex-col items-center align-middle text-center ">
                            <TrendingUpIcon className="m-2 text-blue-400 text-5xl" />
                            <h6 className={`${styles.heading6}`}>Kredit</h6>
                            <p className="mt-4">panduan perilaku dan prinsip moral bagi karyawan bank.</p>
                        </div>

                        <div className="bg-abuTerang  drop-shadow-lg rounded-lg p-5 w-72 flex flex-col items-center align-middle text-center ">
                            <TrendingUpIcon className="m-2 text-blue-400 text-5xl" />
                            <h6 className={`${styles.heading6}`}>Kredit</h6>
                            <p className="mt-4">panduan perilaku dan prinsip moral bagi karyawan bank.</p>
                        </div>
                        
                        <div className="bg-abuTerang  drop-shadow-lg rounded-lg p-5 w-72 flex flex-col items-center align-middle text-center ">
                            <TrendingUpIcon className="m-2 text-blue-400 text-5xl" />
                            <h6 className={`${styles.heading6}`}>Kredit</h6>
                            <p className="mt-4">panduan perilaku dan prinsip moral bagi karyawan bank.</p>
                        </div>

                        <div className="bg-abuTerang  drop-shadow-lg rounded-lg p-5 w-72 flex flex-col items-center align-middle text-center ">
                            <TrendingUpIcon className="m-2 text-blue-400 text-5xl" />
                            <h6 className={`${styles.heading6}`}>Kredit</h6>
                            <p className="mt-4">panduan perilaku dan prinsip moral bagi karyawan bank.</p>
                        </div>

                        <div className="bg-abuTerang  drop-shadow-lg rounded-lg p-5 w-72 flex flex-col items-center align-middle text-center ">
                            <TrendingUpIcon className="m-2 text-blue-400 text-5xl" />
                            <h6 className={`${styles.heading6}`}>Kredit</h6>
                            <p className="mt-4">panduan perilaku dan prinsip moral bagi karyawan bank.</p>
                        </div>

                        <div className="bg-abuTerang  drop-shadow-lg rounded-lg p-5 w-72 flex flex-col items-center align-middle text-center ">
                            <TrendingUpIcon className="m-2 text-blue-400 text-5xl" />
                            <h6 className={`${styles.heading6}`}>Kredit</h6>
                            <p className="mt-4">panduan perilaku dan prinsip moral bagi karyawan bank.</p>
                        </div>

                    </div>
                </section>
            </main>
        <Footer />
        </>
    )
};

export default KreditMenu