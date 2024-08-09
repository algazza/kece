import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SyaratPage from "./Components/SyaratForm/SyaratPage.jsx";
import KreditPage from "./Pages/KreditPage.jsx";
import News from "./Pages/News.jsx";
import Success from "./Pages/Success.jsx";
import PickupPage from "./Pages/PickupPage.jsx";
import SyaratForm from "./Components/SyaratForm.jsx";
<<<<<<< HEAD
import LocationPage from "./Pages/LocationPage.jsx";
import Home from "./Pages/Home.jsx"
=======
import LocationPage from "./Components/LocationPage.jsx";
import NewsTemplate from "./Components/NewsTemplate.jsx";
>>>>>>> 880e67c47346ad5a14dad1a207f7c6838b2c56fd

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/syarat",
    element: <SyaratPage />,
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
    path: "/newss",
    element: <NewsTemplate />,
  },
  {
    path: "/location",
    element: <LocationPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
