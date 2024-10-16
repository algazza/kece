import React, { useEffect, useState } from "react";
import {
  createTheme,
  InputAdornment,
  Pagination,
  TextField,
  ThemeProvider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import IntroBanner from "../../Layouts/IntroBanner";
import { BlueBanner } from "../../helper";
import styles from "../../helper/style";
import { useNavigate } from "react-router-dom";
import { localhostLink } from "../../helper/localhost";

// Fungsi slugify
const generateSlug = (text) => {
  return text
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
};

const theme = createTheme({
  palette: {
    merah: {
      main: "#dc232b",
    },
  },
});

const pageSize = 10;

const News = () => {
  const [query, setQuery] = useState("");
  const [berita, setBerita] = useState([]);
  const [filteredBerita, setFilteredBerita] = useState([]);
  const [selectFilter, setSelectFilter] = useState("All");
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${localhostLink}/api/news`)
      .then((response) => response.json())
      .then((data) => {
        const reversedData = data.reverse();
        setBerita(reversedData);
        setFilteredBerita(reversedData);
        setPagination({ ...pagination, count: reversedData.length });
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }, []);

  useEffect(() => {
    let filteredData = berita;

    if (selectFilter !== "All") {
      filteredData = filteredData.filter(
        (news) => news.kategory === selectFilter
      );
    }

    filteredData = filteredData.filter((news) =>
      news.judul.toLowerCase().includes(query.toLowerCase())
    );

    filteredData = filteredData.reverse();

    setFilteredBerita(filteredData);
    setPagination({
      ...pagination,
      count: filteredData.length,
      from: 0,
      to: pageSize,
    });
  }, [query, berita, selectFilter]);

  const handlePageChange = (event, page) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;
    setPagination({ ...pagination, from: from, to: to });
  };

  return (
    <>
      <section className="">
        <IntroBanner
          TitleBanner="Berita"
          DescriptionBanner={`
            Berita merupakan platform informasi yang menyajikan pembaruan terkini tentang berbagai 
            kegiatan dan inisiatif BPR Arto Moro. Nasabah dan pengunjung dapat menemukan informasi mengenai acara, 
            peluncuran produk atau layanan baru, serta aktivitas bisnis yang relevan. Halaman ini memastikan bahwa 
            semua informasi selalu up-to-date dan mudah diakses.
          `}
          ImageBanner={BlueBanner}
        />
      </section>

      <span className="-mt-[100px] pb-[100px] block" id="section2">
        &nbsp;
      </span>

      <section className="">
        <h1 className={`${styles.heading1} text-center`}>Berita</h1>

        <div className={`${styles.flexCenter} my-6`}>
          <div className="flex gap-4 sm:px-0 px-6 overflow-auto">
            {["All", "Penghargaan", "Promo", "Pengumuman", "Siaran Pers"].map(
              (category) => (
                <div
                  key={category}
                  onClick={() => setSelectFilter(category)}
                  className={`border-biruMuda-500 text-biruMuda-500 hover:bg-biruMuda-500 hover:text-primary duration-500 border-2 px-6 py-2 rounded-md font-bold cursor-pointer flex-shrink-0 ${
                    selectFilter === category
                      ? "bg-biruMuda-500 text-primary"
                      : ""
                  }`}
                >
                  {category}
                </div>
              )
            )}
          </div>
        </div>

        <div className={styles.flexCenter}>
          <ThemeProvider theme={theme}>
            <TextField
              color="merah"
              id="outlined-basic"
              variant="outlined"
              label="Cari Berita..."
              onChange={(e) => setQuery(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon sx={{ color: "merah.main" }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "merah.main",
                    borderWidth: "1.5px",
                    borderRadius: "6px",
                  },
                  "&:hover fieldset": {
                    borderColor: "merah.main",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "merah.main",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "merah.main",
                },
              }}
            />
          </ThemeProvider>
        </div>
      </section>

      <section
        className={`${styles.paddingY} flex flex-wrap justify-center px-4 gap-x-4 gap-y-6 sm:gap-12`}
      >
        {filteredBerita.slice(pagination.from, pagination.to).map((news) => (
          <div
            key={news.judul}
            className="w-[187px] sm:w-[250px] md:w-[550px] md:grid md:grid-flow-col shadow-[3px_5px_9px_1px_#1e1e1e1e] rounded-xl cursor-pointer"
            onClick={() => navigate(`${generateSlug(news.slug)}`)}
          >
            <div className="rounded-t-xl md:rounded-l-xl md:w-40 md:h-40 overflow-hidden">
              <img
                src={`${localhostLink}/image/public/news/${news.image}`}
                alt={news.judul}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="p-4 flex flex-col justify-center">
              <p className={`${styles.fontSmallBold} text-merahh-500`}>
                {news.kategory}
              </p>
              <h6 className={`${styles.heading6} `}>{news.judul}</h6>
              <p className={`${styles.fontSmall} text-abuGelap`}>
                {news.tanggal}
              </p>
            </div>
          </div>
        ))}
      </section>

      <section className={`${styles.flexCenter} py-12`}>
        <Pagination
          count={Math.ceil(pagination.count / pageSize)}
          page={Math.ceil(pagination.from / pageSize) + 1}
          onChange={handlePageChange}
        />
      </section>
    </>
  );
};

export default News;
