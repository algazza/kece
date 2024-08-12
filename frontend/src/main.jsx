import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import KreditPage from "./Pages/KreditPage.jsx";
import News from "./Pages/News.jsx";
import Success from "./Pages/Success.jsx";
import PickupPage from "./Pages/PickupPage.jsx";
import SyaratForm from "./Components/SyaratForm.jsx";
import LocationPage from "./Pages/LocationPage.jsx";
import Home from "./Pages/Home.jsx";
import NewsTemplate from "./Components/NewsTemplate.jsx";
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
    children: [
      {
        path: ":id",
        element: <IsiNews/>
      }
    ]
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
