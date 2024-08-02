import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SyaratPage from './Components/SyaratForm/SyaratPage.jsx';
import Kredit from './Components/Form/Tabungan.jsx';
import KreditPage from './Pages/KreditPage.jsx';
import News from './Pages/News.jsx';

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
    path: "/news",
    element: <News />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
