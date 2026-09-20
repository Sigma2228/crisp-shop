import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import "./Products.css";
import { getAllProducts } from "../Components/API/products";

const Products = () => {

  const [products, setProducts] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const sortOrder = searchParams.get("sort") || "";
  const search = searchParams.get("search") || "";

  useEffect(() => {

    const fetchProducts = async () => {
      const response = await getAllProducts();

      setProducts(response);
    };

    fetchProducts();

  }, []);


  const handleSearch = (e) => {

    const params = new URLSearchParams(searchParams);

    if (e.target.value) {
      params.set("search", e.target.value);
    } else {
      params.delete("search");
    }

    setSearchParams(params);
  };


  const handleSortPlusMinus = () => {

    const params = new URLSearchParams(searchParams);

    params.set("sort", "asc");

    setSearchParams(params);
  };


  const handleSortMinusPlus = () => {

    const params = new URLSearchParams(searchParams);

    params.set("sort", "desc");

    setSearchParams(params);
  };


  const filteredAndSortedProducts = useMemo(() => {

    let result = [...products];


    if (search) {

      result = result.filter((product) =>
        product.title
          .toLowerCase()
          .includes(search.toLowerCase())
      );

    }


    if (sortOrder === "asc") {

      result.sort((a, b) => a.price - b.price);

    }

    if (sortOrder === "desc") {

      result.sort((a, b) => b.price - a.price);

    }


    return result;

  }, [products, search, sortOrder]);


  return (
    <>

      <input
        type="text"
        placeholder="Пошук товару..."
        value={search}
        onChange={handleSearch}
      />


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

        {filteredAndSortedProducts.map((product) => (

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