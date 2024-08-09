import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import IntroBanner from "../Layouts/IntroBanner";
import { sample, samplebanner } from "../data";
import styles from "../data/style";
import {
  createTheme,
  InputAdornment,
  Pagination,
  TextField,
  ThemeProvider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { DataBerita } from "../data/user";
import { useEffect, useState } from "react";
import { TextFieldsRounded } from "@mui/icons-material";

// theme mui
const theme = createTheme({
  palette: {
    merah: {
      main: "#dc232b",
    },
  },
});

// total data berita yang muncul
const pageSize = 10;

// mengambil data dan memisahkan from dan to
const service = {
  getData: () => {
    return new Promise((resolve, reject) => {
      resolve({
        count: DataBerita.length,
        data: DataBerita,
      });
    });
  },
};

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

  // memunculkan data ke berapa saja yang akan muncul
  useEffect(() => {
    service.getData().then((response) => {
      setBerita(response.data);
      setFilteredBerita(response.data);
      setPagination({ ...pagination, count: response.count });
    });
  }, []);

  useEffect(() => {
    let filteredData = berita;

    if (selectFilter !== "All") {
      filteredData = filteredData.filter(
        (news) => news.kategori === selectFilter
      );
    }

    // filter berdasarkan query pencarian judul
    filteredData = filteredData.filter((news) =>
      news.judul.toLowerCase().includes(query.toLowerCase())
    );

    // membalikkan array
    filteredData = filteredData.reverse();

    // mengatur ulang pagination dan berita berdasarkan yang telah di filter 
    setFilteredBerita(filteredData)
    setPagination({
      ...pagination,
      count: filteredData.length,
      from: 0,
      to: pageSize,
    });
  }, [query, berita, selectFilter]);

  // sebagai handlechange dari pagination
  const handlePageChange = (event, page) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;
    setPagination({ ...pagination, from: from, to: to });
  };

  return (
    <>
      <Header />
      <section className="">
        <IntroBanner
          TitleBanner="Berita"
          DescriptionBanner="Daparkan informasi secara tepat, cepat dan terpercaya mengenai BPR Arto Moro"
          ImageBanner={samplebanner}
        />
      </section>

      <section className={`${styles.flexCenter} flex-col gap-6`}>
        <h1 className={`${styles.heading1} text-center`}>Berita</h1>

        <div className="flex gap-4">
          <div className="">Suara Merdeka</div>
          <div className="">Tribun Jateng</div>
          <div className="">JawaPos</div>
        </div>

        <div className="flex gap-4 sm:max-w-full max-w-80 overflow-auto">
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
      </section>

      <section
        className={`${styles.paddingY} grid sm:grid-cols-x550 justify-center px-12 gap-6 sm:gap-12`}
      >
        {filteredBerita.slice(pagination.from, pagination.to).map((news) => (
          <div
            key={news.id}
            className="grid grid-flow-col shadow-[3px_5px_9px_1px_#1e1e1e1e] rounded-xl cursor-pointer"
          >
            <img
              src={news.gambar}
              alt=""
              className="h-fit sm:w-40 rounded-l-xl"
            />
            <div className="p-4 flex flex-col justify-center">
              <h6 className={`${styles.heading6} `}>{news.judul}</h6>
              <p className="py-1 hidden sm:block">{news.ringkasan}</p>
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
      <Footer />
    </>
  );
};

export default News;
// al 7 agustus
