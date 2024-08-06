import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SyaratPage from "./Components/SyaratForm/SyaratPage.jsx";
import Kredit from "./Components/Form/Kredit.jsx";
import KreditPage from "./Pages/KreditPage.jsx";
import News from "./Pages/News.jsx";
import Success from "./Components/Success.jsx";
import PickupPage from "./Pages/PickupPage.jsx";
import SyaratForm from "./Components/SyaratForm.jsx";
import MergedTable from "./Components/tabel.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world</div>,
  },
  {
    path: "/syarat",
    element: <SyaratPage />,
  },
  {
    path: "/Kredit",
    element: <Kredit />,
  },
  {
    path: "/Kreditpage",
    element: <KreditPage />,
  },
  {
    path: "/pickuppage",
    element: <PickupPage />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/succes",
    element: <Success />,
  },
  {
    path: "/syaratt",
    element: <SyaratForm />,
  },
  {
    path: "/table",
    element: <MergedTable />,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
