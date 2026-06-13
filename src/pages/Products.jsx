import { useState, useEffect } from "react";
import "./Products.css";
import { getAllProducts } from "../Components/API/products";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getAllProducts();

      
       setProducts(response);
    };

    fetchProducts();
  }, []);

  const handleSortPlusMinus = () => {
    const sortedProducts = [...products];

    sortedProducts.sort((a, b) => a.price - b.price);

    setProducts(sortedProducts);
  };

  const handleSortMinusPlus = () => {
    const sortedProducts = [...products];

    sortedProducts.sort((a, b) => b.price - a.price);

    setProducts(sortedProducts);
  };

  return (
    <>
      <button
        style={{ marginRight: "20px" }}
        onClick={handleSortPlusMinus}
      >
        Sort by price (спочатку дешевші)
      </button>

      <button onClick={handleSortMinusPlus}>
        Sort by price (спочатку дорожчі)
      </button>

      <ul className="list">
        {products.map((product) => (
          <div
            className="card"
            key={product._id}
            style={{
              width: "200px",
              height: "300px",
            }}
          >
            <li style={{ listStyle: "none" }}>
              <img
                height="150"
                width="200"
                src={product.image}
                alt={product.title}
              />

              <br />

              {product.title}

              <br />

              {product.price}$
            </li>
          </div>
        ))}
      </ul>
    </>
  );
};

export default Products;