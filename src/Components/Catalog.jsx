import React from "react";
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

                <ul>
                    {this.state.filteredProducts.map(product => (
                        <div className="card" style={{ display: 'flex', flexDirection: 'row', width: '200px', height: '300px' }}>
                            <li key={product._id} style={{ listStyle: 'none' }}><img height={'150px'} width={'200px'} src={product.image} alt="" />
                            <br />
                            {product.title}
                            <br />
                            {product.price}$</li>
                        </div>
                    ))}
                </ul>
            </>
        )

    }
}
export default Products