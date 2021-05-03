import React from 'react';
import axios from "axios";

export default class ProductList extends React.Component {
    state = {
        products: [],
    };
    //https://finman-api.herokuapp.com/api/products/2
    //https://jsonplaceholder.typicode.com/users
    componentDidMount() {
        axios.get(`http://localhost:5000/products`).then(res => {
            console.log(JSON.stringify(res.data));
            this.setState({ products: res.data })
        });
    }

    render() {
        return (
            <ul>
                { this.state.products.map(product => <li>{product.name}</li>)}
            </ul>
        )

    }
}