import styles from "../data/style";
import sample from "../img/sampleimage.svg";

const IntroBanner = () => {
  return (
    <section className="flex flex-col md:flex-row sm:py-16">
      <div
        className={`flex-1 ${styles.flexStart} ${styles.marginY} ${styles.paddingX} flex-col shadow-[0px_0px_167px_250px_#fcfffe]`}
      >
        <h2 className={`${styles.heading2}`}>Kredit</h2>
        <p className="">
          Selamat datang di BPR Arto Moro, solusi finansial terpercaya untuk
          memenuhi berbagai kebutuhan Anda. Kami memahami bahwa setiap individu
          dan usaha memiliki kebutuhan yang unik, oleh karena itu kami
          menawarkan berbagai produk kredit yang dapat disesuaikan dengan
          keperluan Anda.
        </p>
      </div>

      <div className="flex-1">
        <img src={sample} alt="" className="w-full h-full relative -z-[1]" />
      </div>
    </section>
  );
};

export default IntroBanner;
