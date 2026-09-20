import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
    return (
        <Link to={`/products/${product.id}`} className="card">
            <img
                className="img"
                src={product.image}
                alt={product.title}
                width="344px"
                height="450px"
            />

            <h3>{product.title}</h3>

            <p>{product.price}$</p>
        </Link>
    );
};

export default ProductItem;