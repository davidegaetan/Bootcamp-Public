import React, { useState, useEffect } from 'react'
import axios from 'axios'
import GetProducts from './components/GetProducts';
import ProductForm from './components/ProductForm';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import GetOneProduct from './components/GetOneProduct';


function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/products')
      .then(res => {
        setProducts(res.data.Products)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><ProductForm /><GetProducts products={products} /></>}/>
          <Route path="/:productId" element={<GetOneProduct/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
