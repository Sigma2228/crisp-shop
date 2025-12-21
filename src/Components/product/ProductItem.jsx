
const ProductItem = ({ product }) => {
    return (
        <div className="card">
            <img className='img' src={product.image} alt="" width={'344px'} height={'450px'} />
            <h3>{product.title}</h3>
            <h2>{product.title}</h2>
            <p>{product.price}</p>
        </div>
    );
};

export default ProductItem;