import IntroBanner from "../Layouts/IntroBanner";
import TitleBlueBanner from "../Layouts/TitleBlueBanner";
import {Armordata, BlueBanner} from "../helper";
import styles from "../helper/style";

const ArmorProp = () => {
    return (
        <>
            <section>
                <IntroBanner
                    ImageBanner={BlueBanner}
                    TitleBanner={"Armor Properti"}
                    DescriptionBanner={`
                Lorem ipsum Selamat datang di BPR Arto Moro, solusi finansial terpercaya untuk
                memenuhi berbagai kebutuhan Anda. Kami memahami bahwa setiap individu
                dan usaha memiliki kebutuhan yang unik, oleh karena itu kami
                menawarkan berbagai produk kredit yang dapat disesuaikan dengan
                keperluan Anda.
            `}
                />
                <TitleBlueBanner title={"Armor Properti"} />
            </section>

            <section className={`${styles.paddingY} ${styles.paddingX} `}>
                <h1 className={`${styles.heading1} text-center mb-12`}>Armor Properti</h1>

                <div className="grid grid-cols-4 gap-12">
                    {Armordata.map((armor) => (

                    <a key={armor.alamat} className="bg-abuTerang rounded-xl cursor-pointer" href={armor.link}>
                        <img
                            src={armor.img}
                            alt={armor.alamat}
                            className="object-cover h-full w-full rounded-xl max-h-[220px]"
                        />
                        <div className="p-2">
                            <h6 className={`${styles.heading5}`}>Rp. {armor.harga}</h6>
                            <p className={`${styles.heading6}`}>{armor.alamat}</p>
                            <p className="text-abuGelap">{armor.kabupaten}</p>
                        </div>
                        <div
                            className="border-abuGelap border-t-[1px] flex gap-2 p-2 font-semibold text-abuGelap"
                        >
                            <p>
                                LB : <span>{armor.lb}</span>m²
                            </p>
                            <p>
                                LT: <span>{armor.lt}</span>m²
                            </p>
                        </div>
                    </a>
                    ))}
                </div>
            </section>
        </>
    );
};

export default ArmorProp;