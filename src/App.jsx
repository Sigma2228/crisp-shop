import './App.css'
import { useState } from 'react'
import HomePage from './pages/HomePage.jsx'
import data from "./data/productsData.json"
import ProductList from './Components/product/ProductList.jsx'
function App() {
   const [page, setPage] = useState(0);
  const perPage = 4;
  const productsToShow = data.data.slice(0, page * perPage);
const hasMore = productsToShow.length < data.data.length;
   return (
    <>
    <HomePage/>
      <ProductList
        title="Products"
        products={productsToShow}
      />

      {hasMore ? (
        <button onClick={() => setPage(prev => prev + 1)}>
          Load more
        </button>
      ) : null}
       
      
    </>
  );
}

export default App