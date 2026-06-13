import './App.css'
import { useState } from 'react'
import HomePage from './pages/HomePage.jsx'
import Header from './Components/header/Header.jsx'
import RegistrationPage from './pages/RegistrationpPage.jsx'
import Products from './pages/Products.jsx'
import ProductList from './Components/product/ProductList.jsx'
import CatalogPage from './pages/CatalogPage.jsx'
import Footer from './Components/footer/footer.jsx'
import Login from './pages/Login.jsx'

import {  Routes, Route, Link } from "react-router-dom";
function App() {
 
   return (
    <>
    <Header />
    

     

      <Routes>
        <Route path='login' element={<Login />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
      </Routes>
    </>
  );
}

export default App