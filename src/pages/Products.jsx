import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { fetchProducts } from "../store/productsSlice";
import "./Products.css";

const Products = () => {
  const dispatch = useDispatch();

  const { items: products, loading, error } = useSelector(
    (state) => state.products
  );

  const [searchParams, setSearchParams] = useSearchParams();

  const sortOrder = searchParams.get("sort") || "";
  const search = searchParams.get("search") || "";

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

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
        product.title.toLowerCase().includes(search.toLowerCase())
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

  if (loading) {
    return <p>Завантаження товарів...</p>;
  }

  if (error) {
    return <p>Помилка завантаження товарів: {error}</p>;
  }

  return (
    <>
      <input
        className="products-input"
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

      <ul className="product-list">
        {filteredAndSortedProducts.map((product) => (
          <div
            className="card"
            key={product._id}
            style={{
              width: "200px",
              height: "300px",
            }}
          >
            <li
              className="product-item"
              style={{ listStyle: "none" }}
            >
              <Link to={`/products/${product.id}`}>
                <img
                  className="product-img"
                  src={product.image}
                  alt={product.title}
                />

                <br />

                <h5 className="products-title">
                  {product.title}
                </h5>

                <br />

                <p className="products-price">
                  {product.price}$
                </p>
              </Link>
            </li>
          </div>
        ))}
      </ul>
    </>
  );
};

export default Products;