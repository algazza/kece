import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./index.css";
import Home from "./Pages/Home.jsx";
import SyaratKredit from "./Pages/SyaratProduk/SyaratKredit.jsx";
import SyaratDeposito from "./Pages/SyaratProduk/SyaratDeposito.jsx";
import SyaratTabungan from "./Pages/SyaratProduk/SyaratTabungan.jsx";
import News from "./Pages/News/News.jsx";
import IsiNews from "./Pages/News/IsiNews.jsx";
import PickupPage from "./Pages/PickupPage.jsx";
import Sponsor from "./Pages/Sponsor.jsx";
import Sejarah from "./Pages/Sejarah.jsx";
import Manajemen from "./Pages/Manajemen.jsx";
import Error from "./Pages/Error.jsx";
import Laporan from "./Pages/Laporan/Laporan.jsx";
import VisiMisi from "./Pages/VisiMisi.jsx";
import LaporanGCG from "./Pages/Laporan/LaporanGCG.jsx";
import LaporanTahunan from "./Pages/Laporan/LaporanTahunan.jsx";
import LaporanTriwulan from "./Pages/Laporan/LaporanTriwulan.jsx";
import Penghargaan from "./Pages/Penghargaan.jsx";
import Login from "./Layouts/Login.jsx";
import ProtectedRoute from "./Layouts/ProtectedRoute.jsx";
import Promo from "./Pages/Promo/Promo.jsx";
import IsiPromo from "./Pages/Promo/IsiPromo.jsx";
import MainLayout from "./MainLayout.jsx";
import Digital from "./Pages/Digital.jsx";
import MobilKas from "./Pages/MobilKas.jsx";
import Location from "./Pages/Location.jsx";

const router = createBrowserRouter([
  {
    path: "/newwebsite",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "kredit",
        element: <SyaratKredit />,
      },
      {
        path: "deposito",
        element: <SyaratDeposito />,
      },
      {
        path: "tabungan",
        element: <SyaratTabungan />,
      },
      {
        path: "layanan-digital",
        element: <Digital />,
      },
      {
        path: "mobil-kas",
        element: <MobilKas/>,
      },
      {
        path: "promo",
        element: <Promo />,
      },
      {
        path: "promo/:slug",
        element: <IsiPromo />,
      },
      {
        path: "sponsor",
        element: <Sponsor />,
      },
      {
        path: "pick-up-service",
        element: <PickupPage />,
      },
      {
        path: "berita",
        element: <News />,
      },
      {
        path: "berita/:slug",
        element: <IsiNews />,
      },
      {
        path: "sejarah",
        element: <Sejarah />,
      },
      {
        path: "visi-misi",
        element: <VisiMisi />,
      },
      {
        path: "manajemen",
        element: <Manajemen />,
      },
      {
        path: "penghargaan",
        element: <Penghargaan />,
      },
      {
        path: "lokasi",
        element: <Location />,
      },
      {
        path: "laporan",
        element: <Laporan />,
      },
      {
        path: "laporan/laporan-triwulan",
        element: <LaporanTriwulan />,
      },
      {
        path: "laporan/laporan-gcg",
        element: <LaporanGCG />,
      },
      {
        path: "laporan/laporan-tahunan",
        element: <LaporanTahunan />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);

const App = () => {
  return (
    <div className="">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
};

export default App;
