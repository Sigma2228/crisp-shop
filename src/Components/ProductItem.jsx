const ProductItem = ({ product }) => {
    return (
        <>
            <p>{product.name}</p>
            <p>{product.price}</p>
        </>
    );
};

export default ProductItem;