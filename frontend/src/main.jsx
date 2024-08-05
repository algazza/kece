import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SyaratPage from './Components/SyaratForm/SyaratPage.jsx';
import Kredit from './Components/Form/Tabungan.jsx';
import KreditPage from './Pages/KreditPage.jsx';
import LocationPage from './Components/location/LocationPage.jsx';

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
    path: "/Location",
    element: <LocationPage />,
  },
  
  {
    path: "/dashboard"
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
