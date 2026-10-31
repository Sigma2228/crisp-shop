import { useParams } from "react-router-dom";
import { fetchProductsById } from "../store/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

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
                <>
                    <h1>{product.title}</h1>
                    <img src={product.image} alt={product.title} />
                    <p>Ціна: ${product.price}</p>
                    <p>{product.description}</p>
                </>
            )}
        </div>
    );
};

export default ProductDetails;