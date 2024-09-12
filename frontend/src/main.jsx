import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./Pages/Home.jsx";
import SyaratKredit from "./Pages/SyaratProduk/SyaratKredit.jsx";
import SyaratDeposito from "./Pages/SyaratProduk/SyaratDeposito.jsx";
import SyaratTabungan from "./Pages/SyaratProduk/SyaratTabungan.jsx";
import News from "./Pages/News/News.jsx";
import IsiNews from "./Pages/News/IsiNews.jsx";
import PickupPage from "./Pages/PickupPage.jsx";
import LocationPage from "./Pages/LocationPage.jsx";
import Success from "./Pages/Success.jsx";
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

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
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
        element: <LocationPage />,
      },
      {
        path: "laporan",
        element: <Laporan />,
      },
      {
        path: "laporan-triwulan",
        element: <LaporanTriwulan />,
      },
      {
        path: "laporan-gcg",
        element: <LaporanGCG />,
      },
      {
        path: "laporan-tahunan",
        element: <LaporanTahunan />,
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
        path: "berita",
        element: <News />,
      },
      {
        path: "berita/:id",
        element: <IsiNews />,
      },
      {
        path: "pick-up-service",
        element: <PickupPage />,
      },
      {
        path: "promo",
        element: <Promo />,
      },
      {
        path: "promo/:id",
        element: <Promo />,
      },
      {
        path: "sponsor",
        element: <Sponsor />,
      },
    ],
  },
  {
    path: "/success",
    element: <Success />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
