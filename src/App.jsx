import './App.css'
import HomePage from './pages/HomePage.jsx'
import data from "./data/productsData.json"
import ProductList from "./Components/ProductList.jsx"

function App() {
  return (
    <>
      {Object.entries(data).map(([category, items]) => (
        <ProductList
          key={category}
          title={category}
          products={items}
        />
      ))}
    </>
  )
}

export default App