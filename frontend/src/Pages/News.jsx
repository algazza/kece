import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import IntroBanner from "../Layouts/IntroBanner";
import { samplebanner } from "../data";
import styles from "../data/style";
import {
  createTheme,
  InputAdornment,
  Pagination,
  TextField,
  ThemeProvider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";

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
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  });

  useEffect(() => {
    fetchData(pagination.from, pagination.to);
  }, [pagination.from, pagination.to]);

  const fetchData = async (from, to) => {
    try {
      const response = await axios.get("http://localhost:8000/api/news");
      const dataNews = response.data.slice(from, to);
      setPagination({ ...pagination, count: response.data.length });
      setBerita(dataNews);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

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
          <div
            className={`border-biruMuda-500 text-biruMuda-500 hover:bg-biruMuda-500 hover:text-primary duration-500 border-2 px-6 py-2 rounded-md font-bold cursor-pointer`}
          >
            All
          </div>
          <div
            className={`border-biruMuda-500 text-biruMuda-500 hover:bg-biruMuda-500 hover:text-primary duration-500 border-2 px-6 py-2 rounded-md font-bold cursor-pointer`}
          >
            Penghargaan
          </div>
          <div
            className={`border-biruMuda-500 text-biruMuda-500 hover:bg-biruMuda-500 hover:text-primary duration-500 border-2 px-6 py-2 rounded-md font-bold cursor-pointer`}
          >
            Promo
          </div>
          <div
            className={`border-biruMuda-500 text-biruMuda-500 hover:bg-biruMuda-500 hover:text-primary duration-500 border-2 px-6 py-2 rounded-md font-bold cursor-pointer`}
          >
            Pengunguman
          </div>
          <div
            className={`border-biruMuda-500 text-biruMuda-500 hover:bg-biruMuda-500 hover:text-primary duration-500 border-2 px-6 py-2 rounded-md font-bold cursor-pointer flex-shrink-0`}
          >
            Siaran Pers
          </div>
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
        className={`${styles.paddingY} grid sm:grid-cols-x600 justify-center px-12 gap-6 sm:gap-12`}
      >
        {berita.filter((news) => news.judul.toLowerCase().includes(query.toLowerCase())).map(
          (news) => (
            <div
              key={news.id}
              className="grid grid-flow-col shadow-[3px_5px_9px_1px_#1e1e1e1e] rounded-xl "
            >
              <img src={`http://localhost:8000/image/public/news/${news.image}`} alt="" className="h-fit sm:w-40 rounded-l-xl" />
              <div className="p-4 flex flex-col justify-center">
                <h6 className={`${styles.heading6} `}>{news.judul}</h6>
                <p className="py-1 hidden sm:block">{news.keterangan_singkat}</p>
                <p className={`${styles.fontSmall} text-abuGelap`}>
                  {format(new Date(news.created_at), "dd MMMM yyyy")}
                </p>
              </div>
            </div>
          )
        )}
      </section>

      <section className={`${styles.flexCenter} py-12`}>
        <Pagination
          count={Math.ceil(pagination.count / pageSize)}
          onChange={handlePageChange}
        />
      </section>
      <Footer />
    </>
  );
};

export default News;
