const ProductItem = ({ product }) => {
    return (
        <li>
            <p>{product.name}</p>
            <p>{product.price}</p>
        </li>
    );
};

export default ProductItem;