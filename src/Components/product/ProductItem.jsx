import { Link } from "react-router-dom";
import "./Productitem.css";
import { addToCart } from "../../store/cartSlice";
import { useDispatch } from "react-redux";

const ProductItem = ({ product }) => {
    const dispatch = useDispatch();
    return (
        <div className="products-div">
            <Link to={`/products/${product._id}`}>
                <img className="product-img" src={product.image} alt={product.title} />
                <h3 className="product-name" style={{ color: "black" }}>{product.title}</h3>
                <p className="product-price">{product.price}$</p>
            </Link>
            <button className="pagination-button" onClick={() => dispatch(addToCart(product))}>До кошика</button>
        </div>
        
    );
};

export default ProductItem;