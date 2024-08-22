import React from "react";
import { ButtonOutline } from "../Components/Button";
import { motion } from "framer-motion";
import {
  Link,
  useLocation,
  useNavigate,
  useRouteError,
} from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import UndoIcon from "@mui/icons-material/Undo";
import styles from "../data/style";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <section className={`${styles.flexCenter} h-screen bg-primary`}>
      <div className="">
        <div className={`${styles.flexCenter} px-10 py-16`}>
          <div className="bg-merahh-500 px-10 py-10 rounded-full relative z-[1] ">
            <CloseIcon sx={{ fontSize: 80 }} className="text-primary" />
          </div>
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: [1, 0], scale: [1, 2.5] }}
            transition={{
              duration: 2,
              ease: "easeOut",
              repeat: Infinity,
              repeatDelay: 0.2,
            }}
            className="absolute bg-merahh-100 px-20 py-20 rounded-full"
          ></motion.div>
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: [1, 0], scale: [1, 1.75] }}
            transition={{
              duration: 2,
              ease: "easeOut",
              repeat: Infinity,
              repeatDelay: 0.2,
            }}
            className="absolute bg-merahh-300 px-20 py-20 rounded-full"
          ></motion.div>
        </div>

        <div className={`${styles.flexCenter} flex-col text-center`}>
          <h1 className={`${styles.heading1}`}>Oops, Something Happened</h1>
          <p className="mb-6">{error.message || error.statusText}</p>

          <div className="flex gap-6">
            <button
              className="flex gap-2 py-2 px-4 bg-abuGelap text-primary cursor-pointer w-fit rounded-lg"
              onClick={() => navigate(-1)}
            >
              <UndoIcon width={20} />
              <span>Go Back</span>
            </button>

            <Link
              to="/"
              className="flex gap-2 py-2 px-4 bg-abuGelap text-primary cursor-pointer w-fit rounded-lg"
            >
              <HomeIcon width={20} />
              <span>Go Home</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;
