import { sample } from "../../data";
import styles from "../../data/style";
import Footer from "../../Layouts/Footer";
import IntroBanner from "../../Layouts/IntroBanner";
import TitleBlueBanner from "../../Layouts/TitleBlueBanner";

const LocationPage = () => {
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


            



            <div className="">

            </div>
            <Footer />
        </>


    );
};

export default LocationPage; 