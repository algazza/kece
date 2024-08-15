import { Component } from "react";
import styles from "../data/style";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Link } from "react-router-dom";

export const ButtonGetDown = ({
  TextColor = "text-merahh",
  BorderColor = "border-merahh",
}) => {
  return (
    <button className={`border-2 ${BorderColor} py-2 px-4 rounded-xl mt-4`}>
      <span className={`${TextColor} ${styles.fontBodyBold} mr-4`}>
        Telusuri Lebih Dalam
      </span>
      <ArrowDownwardIcon
        className={`${TextColor} place-items-center animate-bounce`}
      />
    </button>
  );
};

export const ButtonFull = ({
  as: Component = "button",
  ColorPrimary = "bg-biruMuda-500",
  ColorPrimary200 = "bg-biruMuda-200",
  ColorPrimary400 = "bg-biruMuda-400",
  WidthShadow = "w-32",
  WidthButton = "w-28",
  to,
  children,
  onClick
}) => {
  const isLink = Component === Link

  return (
    <Component
      to={to}
      onClick = {isLink ? undefined : onClick}
      className={`overflow-hidden relative grid justify-center ${WidthButton} p-2 h-12 ${ColorPrimary} text-primary border-none rounded-md ${styles.fontBody} font-semibold cursor-pointer z-10 group`}
    >
      {children}
      <span
        className={`absolute ${WidthShadow} h-32 -top-8 -left-2 bg-primary rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left`}
      ></span>
      <span
        className={`absolute ${WidthShadow} h-32 -top-8 -left-2 ${ColorPrimary200} rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left`}
      ></span>
      <span
        className={`absolute ${WidthShadow} h-32 -top-8 -left-2 ${ColorPrimary400} rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left`}
      ></span>
      <span
        className={`group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-[19px] z-10`}
      >
        {children}
      </span>
    </Component>
  );
};

export const ButtonOutline = ({
  ColorText = "text-biruTuwa-500",
  ColorPrimary = "border-biruTuwa-500",
  ColorPrimary200 = "bg-biruTuwa-200",
  ColorPrimary400 = "bg-biruTuwa-300",
  WidthShadow = "w-40",
  WidthButton = "w-36",
  TopShadow = "top-2.5",
  LeftShadow = "left-[19px]",
  children,
  href,
  target
}) => {
  return (
    <a href={href} target={target}
      className={`overflow-hidden relative grid justify-center ${WidthButton} p-2 h-12 ${ColorText} border-2 ${ColorPrimary} rounded-md ${styles.fontBody} font-semibold cursor-pointer z-10 group`}
    >
      {children}
      <span
        className={`absolute ${WidthShadow} h-32 -top-9 -left-2 bg-primary rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left`}
      ></span>
      <span
        className={`absolute ${WidthShadow} h-32 -top-9 -left-2 ${ColorPrimary200} rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left`}
      ></span>
      <span
        className={`absolute ${WidthShadow} h-32 -top-9 -left-2 ${ColorPrimary400} rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left`}
      ></span>
      <span
        className={`group-hover:opacity-100 group-hover:duration-1000 group-hover:text-primary duration-100 opacity-0 absolute ${TopShadow} ${LeftShadow} z-10`}
      >
        {children}
      </span>
    </a>
  );
};
// Al 2 Agustusy