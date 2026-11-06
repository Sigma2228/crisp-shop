import { useParams } from "react-router-dom";
import { fetchProductsById } from "../store/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import './ProductDetails.css'


const ProductDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { productsById, detailsLoadingById, detailsErrorById } = useSelector((state) => state.products);
    const product = productsById[id];
    const loading = detailsLoadingById[id];
    const error = detailsErrorById[id];

    useEffect(() => {
        dispatch(fetchProductsById(id));
    }, [dispatch, id]);

    return (
        <div>
            {!product && !error && <p>{loading ? "Завантаження товару..." : "Завантаження..."}</p>}
            {error && <p role="alert">Не вдалося завантажити товар: {error}</p>}
            {product && (
                <div className="details">
                    
                    <img className="details-img" src={product.image} alt={product.title} />
                    <div className="details-wrap">
                    <h2 className="details-title">{product.title}</h2>
                    <p className="details-price">{product.price}$</p>
                    <p className="details-desc">{product.description}</p>

                    <div className="size-container">
    <h5>SELECT SIZE</h5>

    <div className="size-options">
        {["S", "M", "L", "XL", "XXL"].map(size => (
            <label className="size-option" key={size}>
                <input type="radio" name="size" value={size} />
                <span>{size}</span>
            </label>
        ))}
    </div>
</div>
<button className="details-button">ADD TO BAG</button>
</div>

                
                </div>
            )}
        </div>
    );
};

export default ProductDetails;