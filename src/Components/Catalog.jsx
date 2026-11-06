import React from "react";
import './Catalog.css'
import { Link } from "react-router-dom";
import { getAllProducts } from "../Components/API/products";
class Products extends React.Component {
    state = {
        products: [],
        filteredProducts: [],
    }
    async componentDidMount() {
        const response = await getAllProducts()
        this.setState({ products: response, filteredProducts: response })
    }
    handleSortPlusMinus = () => {

        const sortedProducts = [...this.state.products];

        sortedProducts.sort(
            (a, b) => a.price - b.price
        );

        this.setState({
            filteredProducts: sortedProducts
        });

    }
    handleSortMinusPlus = () => {

        const sortedProducts = [...this.state.products];

        sortedProducts.sort(
            (a, b) => b.price - a.price
        );

        this.setState({
            filteredProducts: sortedProducts
        });

    }
    render() {
        return (
            <>
                <button style={{marginRight: '20px'}} onClick={this.handleSortPlusMinus}>
                    Sort by price(спочатку дешевші)
                </button>
                <button onClick={this.handleSortMinusPlus}>
                    Sort by price(спочатку дорожчі)
                </button>

                <ul className="catalog-list">
                    {this.state.filteredProducts.map(product => (
                        <div className="card">
                            <Link to={`/products/${product._id}`}><li key={product._id}><img className="catalog-img" src={product.image} alt="" />
                            
                            
                            <br />
                            <h5 className="catalog-title">{product.title}</h5>
                            <br />
                            <p className="catalog-text">{product.price}$</p></li>
                            </Link>
                        </div>
                    ))}
                </ul>
            </>
        )

    }
}
export default Products