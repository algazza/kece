import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./Pages/Home.jsx";
import SyaratKredit from "./Pages/SyaratKredit.jsx";
import SyaratDeposito from "./Pages/SyaratDeposito.jsx";
import SyaratTabungan from "./Pages/SyaratTabungan.jsx";
import News from "./Pages/News.jsx";
import IsiNews from "./Pages/IsiNews.jsx";
import PickupPage from "./Pages/PickupPage.jsx";
import LocationPage from "./Pages/LocationPage.jsx";
import Success from "./Pages/Success.jsx";
import KreditMenu from "./Pages/KreditMenu.jsx";
import TabunganMenu from "./Pages/TabunganMenu.jsx";
import ArmorProp from "./Pages/ArmorProp.jsx";
import Sponsor from "./Pages/Sponsor.jsx";
import Sejarah from "./Pages/Sejarah.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "lokasi",
        element: <LocationPage />,
      },
      {
        path: "sejarah",
        element: <Sejarah />,
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
        path: "news",
        element: <News />,
      },
      {
        path: "news/:id",
        element: <IsiNews />,
      },
      {
        path: "pick-up-service",
        element: <PickupPage />,
      },
      {
        path: "armor-properti",
        element: <ArmorProp />,
      },
      {
        path: "sponsor",
        element: <Sponsor />,
      },
      {
        path: "menu",
        element: <KreditMenu />,
      },
      {
        path: "menuT",
        element: <TabunganMenu />,
      },
    ],
  },
  {
    path: "/success",
    element: <Success />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
