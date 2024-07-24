import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
      ],

    theme: {
        extend: {
            colors: {
                primary: "#fcfffe",
                abuTerang: "#F9F9F9",
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
                xs: "480px",
                ss: "620px",
                sm: "768px",
                md: "1060px",
                lg: "1200px",
                xl: "1700px",
            },
            gridTemplateColumns: {
                x2500: "620px 230px",
                x250: "250px",
            },
            backgroundImage: {
                footerimg: "url('../img/Footer-img.svg')",
            },
        },
    },
    daisyui: {
        themes: ["light"],
        // styled: [false],
    },

    plugins: [forms, require("daisyui")],
};
