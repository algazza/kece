import {ButtonGetDown} from "../Components/Button";
import styles from "../data/style";

const IntroBanner = ({TitleBanner, DescriptionBanner, ImageBanner}) => {
  return (
    <section className={`flex flex-col md:flex-row pb-6 sm:pb-16`}>
      <div
        className={`flex-1 flex-col shadow-[0px_0px_56px_90px_#fcfffe] ss:shadow-[0px_0px_48px_105px_#fcfffe] gap-2 ${styles.flexStart} ${styles.marginY} ${styles.paddingX}`}
      >
        <h2 className={`${styles.heading2}`}>{TitleBanner}</h2>
        <p className="text-abuGelap">{DescriptionBanner}</p>
        <ButtonGetDown />
      </div>

      <div className="flex-1">
        <img src={ImageBanner} alt="" className="w-full h-full relative -z-[1]" />
      </div>
    </section>
  );
};

export default IntroBanner;
