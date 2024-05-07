import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from './Components/Header/Navbar';
import CreateAdmin from './Pages/Create__admin/Createlink';
import ManageAdmin from './Pages/Manage__admin/Manage';
import NotFound from './Components/Not__found/Notfound';
import Homelink from './Pages/Homelink/Homelink';



const App = () => {
  return (
    <>


      <Navbar />
      <Routes>
        <Route path="/admin" element={<CreateAdmin />} />
        <Route path="/manage" element={<ManageAdmin />} />
        <Route path="/" element={<Homelink />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
