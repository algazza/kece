import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import SyaratPage from './Components/SyaratForm/SyaratPage.jsx';
import Kredit from './Components/Form/Tabungan.jsx';
import KreditPage from './Pages/KreditPage.jsx';

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
    path: "/dashboard"
  }

]);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/">
//       <Route path='syarat' element={<SyaratPage/>}/>
//       {/* <Route path='dashboard' element={'../../backend/resources/view/admin/tabungan/Tabungan'}>
//         <Route path='tabungan'/>
//       </Route> */}
//     </Route>
//   )
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
