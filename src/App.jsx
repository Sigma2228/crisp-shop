import './App.css'
import Header from './Components/header/Header.jsx'

import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

const HomePage = lazy(() => import('./pages/HomePage.jsx'))
const RegistrationPage = lazy(() => import('./pages/RegistrationpPage.jsx'))
const Products = lazy(() => import('./pages/Products.jsx'))
const CatalogPage = lazy(() => import('./pages/CatalogPage.jsx'))
const Login = lazy(() => import('./pages/Login.jsx'))
const ProductDetails = lazy(() => import('./pages/ProductDetails.jsx'))

function App() {
  return (
    <>
      <Header />

      <Suspense fallback={<div>Завантаження...</div>}>
        <Routes>
          <Route path='login' element={<Login />} />
          <Route path="/" element={<HomePage />} />

          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />

          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App