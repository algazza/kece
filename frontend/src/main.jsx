import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./Pages/Home.jsx";
import KreditPage from "./Pages/KreditPage.jsx";
import News from "./Pages/News.jsx";
import IsiNews from "./Pages/IsiNews.jsx";
import PickupPage from "./Pages/PickupPage.jsx";
import SyaratForm from "./Components/SyaratForm.jsx";
import LocationPage from "./Pages/LocationPage.jsx";
import Success from "./Pages/Success.jsx";
import KreditMenu from "./Pages/KreditMenu.jsx";
import TabunganMenu from "./Pages/TabunganMenu.jsx";


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
        path: "Kreditpage",
        element: <KreditPage />,
      },
      {
        path: "pickuppage",
        element: <PickupPage />,
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
        path: "syarat",
        element: <SyaratForm />,
      },
      {
        path: "location",
        element: <LocationPage />,
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
