import "./ProductList.css";
import ProductItem from "./ProductItem";

const ProductList = ({ title, products = [] }) => (

  <>
    <h2>{title}</h2>
    <ul className="list">
      {products.map(p => (
        <li className="li" key={p.id}>
          <ProductItem product={p} />
        </li>
      ))}
    </ul>
  </>
)

export default ProductList