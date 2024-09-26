import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
      ],
      teal: {
          100: "#d0edce",
          200: "#a0db9d",
          300: "#71c96d",
          400: "#41b73c",
          500: "#12a50b",
          600: "#0e8409",
          700: "#0b6307",
          800: "#074204",
          900: "#042102"
},

      theme: {
        extend: {
          colors: {
            primary: "#fcfffe",
            abuTerang: "#F9F9F9",
            abuGelap: "#646464",
            biruTuwa: {
              100: "#d5d6e6",
              200: "#abaccd",
              300: "#8183b4",
              400: "#57599b",
              500: "#2d3082",
              600: "#242668",
              700: "#1b1d4e",
              800: "#121334",
              900: "#090a1a",
            },
            biruMuda: {
              100: "#cdedfa",
              200: "#9bdaf6",
              300: "#6ac8f1",
              400: "#38b5ed",
              500: "#06a3e8",
              600: "#0582ba",
              700: "#04628b",
              800: "#02415d",
              900: "#01212e",
            },
            merahh: "#dc232b",
          },
          fontFamily: {
            poppins: ["Poppins", "sans-serif"],
            jakarta: ["Plus Jakarta Sans", "sans-serif"],
          },
          screens: {
            xss: "320px",
            xs: "480px",
            ss: "620px",
            sss: "560px",
            sm: "768px",
            sm2: "425px",
            mdd: "860px",
            md: "1060px",
            md2: "1024px",
            lg: "1200px",
            xl: "1700px",
            xxl: "2560px",
          },
          gridTemplateColumns: {
            x2500: "620px 230px",
            x250: "250px",
            x550: "550px 550px",
            x480: "480px 480px",
          },
          backgroundImage: {
            footerimg: "url('./src/img/Footer-img.svg')",
            footerimage: "url('./src/img/footerimg.svg')",
            footerimagexs: "url('./src/img/footerimg-xs.svg')",
            imagebgWithTitle: "url('./src/img/imageWithTitle.svg')",
          },
        },
      },
    daisyui: {
        themes: ["light"],
        // styled: [false],
    },

    plugins: [forms, require("daisyui")],
};
