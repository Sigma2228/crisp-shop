import ProductItem from "../Components/ProductItem"

const ProductList = ({ title, products = [] }) => (

  <>
    {console.log("ProductList render:", title, products)}
    <h2>{title}</h2>
    <ul>
      {Array.isArray(products) && products.map(p => (
        <li key={p._id || p.id}>
          <ProductItem product={p} />
        </li>
      ))}
    </ul>
  </>
)

export default ProductList