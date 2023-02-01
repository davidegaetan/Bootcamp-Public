import React, { useState, useEffect } from 'react'
import axios from 'axios'
import GetProducts from './components/GetProducts';
import ProductForm from './components/ProductForm';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import GetOneProduct from './components/GetOneProduct';
import EditProduct from './components/EditProduct';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<><ProductForm /><GetProducts/></>}/>
          <Route exact path="/:productId" element={<GetOneProduct/>}/>
          <Route exact path="/:productId/edit" element={<EditProduct/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
