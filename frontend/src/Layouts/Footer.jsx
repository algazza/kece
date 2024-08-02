// ----- Folder Data -----
import { footer1, footer2, logoArmor, marqueeImage } from "../data/index";
import styles from "../data/style";
// ----- MUI -----
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
// ----- Router DOM -----
import { Link } from "react-router-dom";
// ----- Framer Motion -----
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="mt-8 bg-biruMuda-100 shadow-[inset_0px_0px_164px_116px_#fcfffe]">
      <div className={`${styles.paddingY} border-t-2 border-abuGelap`}>
        <h3 className={`${styles.heading3} text-center mb-10`}>Stackholder</h3>

        <div className={`overflow-hidden flex`}>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="flex flex-shrink-0"
          >
            {marqueeImage.map((img) => (
              <img src={img.image} key={img.id} className="pr-20" />
            ))}
          </motion.div>

          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="flex flex-shrink-0"
          >
            {marqueeImage.map((img) => (
              <img src={img.image} key={img.id} className="pr-20" />
            ))}
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between bg-footerimagexs xs:bg-footerimage bg-no-repeat">
        <div className="flex flex-col py-4 pl-8 pr-12 xs:p-7 gap-2 xs:gap-5 text-white">
          <a href="/" className=" flex items-center gap-3">
            <img src={logoArmor} alt="logo" className=" xs:w-16" />
            <span
              className={`${styles.heading5} xs:leading-[24px] leading-[20px]`}
            >
              BPR ARTO MORO
            </span>
          </a>
          <p className={`${styles.fontSmall} pr-4`}>
            Office : Jl. Elang Raya No. 99 Mangunharjo, Tembalang, Semarang
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-4 xs:mt-12 md:mt-0 px-5 md:px-0">
          <div className="mr-8">
            <h4 className={`${styles.heading5}`}>Informasi Perusahaan</h4>
            <ul>
              {footer1.map((futer) => (
                <li key={futer.id} className="">
                  <a href={futer.link} className={`${styles.fontBody}`}>
                    {futer.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="">
            <h4 className={`${styles.heading5}`}>Informasi Perusahaan</h4>
            <ul>
              {footer2.map((futer) => (
                <li key={futer.id} className="">
                  <a href={futer.link} className={`${styles.fontBody}`}>
                    {futer.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid justify-center col-span-2 ">
            <h4 className={`${styles.heading5} text-center`}>
              Unduh Aplikasi Kami
            </h4>
            <div className="m-2 gap-4 flex flex-row">
              <a
                className="inline-flex items-center justify-center border-2 border-black rounded-full bg-black py-[0.625rem] px-[1.5rem] text-center outline-none text-white"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-[1.5rem] h-[1.5rem]"
                  viewBox="0 0 512 512"
                >
                  <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                </svg>
                <span className="ml-4 flex flex-col items-start leading-[1]">
                  <span className="mb-1 text-[0.75rem] leading-[1]">
                    GET IT ON
                  </span>
                  <span className="font-[600]">Google Play</span>
                </span>
              </a>

              <a
                className="inline-flex items-center justify-center border-2 border-black rounded-full bg-black py-[0.625rem] px-[1.5rem] text-center outline-none text-white"
                href="#"
              >
                <svg
                  fill="currentcolor"
                  className="w-[1.5rem] h-[1.5rem]"
                  viewBox="-52.01 0 560.035 560.035"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff"
                >
                  <path d="M380.844 297.529c.787 84.752 74.349 112.955 75.164 113.314-.622 1.988-11.754 40.191-38.756 79.652-23.343 34.117-47.568 68.107-85.731 68.811-37.499.691-49.557-22.236-92.429-22.236-42.859 0-56.256 21.533-91.753 22.928-36.837 1.395-64.889-36.891-88.424-70.883-48.093-69.53-84.846-196.475-35.496-282.165 24.516-42.554 68.328-69.501 115.882-70.192 36.173-.69 70.315 24.336 92.429 24.336 22.1 0 63.59-30.096 107.208-25.676 18.26.76 69.517 7.376 102.429 55.552-2.652 1.644-61.159 35.704-60.523 106.559M310.369 89.418C329.926 65.745 343.089 32.79 339.498 0 311.308 1.133 277.22 18.785 257 42.445c-18.121 20.952-33.991 54.487-29.709 86.628 31.421 2.431 63.52-15.967 83.078-39.655"></path>
                </svg>
                <span className="ml-4 flex flex-col items-start leading-[1]">
                  <span className="mb-1 text-[0.75rem] leading-[1]">
                    GET IT ON
                  </span>
                  <span className="font-[600]">App Store</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-biruMuda-500 flex md:flex-row flex-col md:justify-between items-center py-4 md:px-8 gap-4 mt-4">
        <ul className="flex gap-4 text-primary">
          <li>
            <a href="/" className="">
              <FacebookRoundedIcon />
            </a>
          </li>
          <li>
            <a href="/" className="">
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a href="/" className="">
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a href="/" className="">
              <YouTubeIcon />
            </a>
          </li>
        </ul>

        <ul className={`flex gap-8 text-primary ${styles.fontSmall}`}>
          <li>
            <Link to="" className="">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="" className="">
              Term & Condition
            </Link>
          </li>
          <li>
            <Link to="/" className="">
              Help & Support
            </Link>
          </li>
        </ul>

        <span className={`text-primary ${styles.fontSmall} `}>
          &#169; 2024 Bank BPR Arto Moro All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
