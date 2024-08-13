import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home.jsx";
import KreditPage from "./Pages/KreditPage.jsx";
import News from "./Pages/News.jsx";
import Success from "./Pages/Success.jsx";
import PickupPage from "./Pages/PickupPage.jsx";
import SyaratForm from "./Components/SyaratForm.jsx";
<<<<<<< HEAD
import NewsTemplate from "./Components/NewsTemplate.jsx";
import LocationPage from "./Pages/LocationPage.jsx";
=======
import LocationPage from "./Pages/LocationPage.jsx";
import Home from "./Pages/Home.jsx";
>>>>>>> cb9ef496ef5540e437bfc00c18bbd3c96abbb1d8
import IsiNews from "./Pages/IsiNews.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
    path: "/news/:id",
    element: <IsiNews />,
  },
  {
    path: "/success",
    element: <Success />,
  },
  {
    path: "/syarat",
    element: <SyaratForm />,
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
