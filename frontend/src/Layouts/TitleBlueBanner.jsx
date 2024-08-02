
import styles from "../data/style";

const TitleBlueBanner = ({title}) => {
  return (
    <div className="bg-imagebgWithTitle bg-center">
      <h1
        className={`${styles.paddingY} ${styles.heading1} ${styles.flexCenter} shadow-[inset_0px_0px_34px_19px_#035B82] ss:shadow-[inset_0px_0px_64px_29px_#035B82] text-primary bg-biruMuda-500/75`}
      >
        {title}
      </h1>
    </div>
  );
};

export default TitleBlueBanner;
