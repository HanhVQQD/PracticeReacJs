import React from "react";
const axios = require('axios').default;

class Dad extends React.Component {
    constructor (props){
        super(props)
        this.state={
            products:[]
        }
    }

    componentDidMount(){
        axios.get('https://61bc10bdd8542f001782451c.mockapi.io/FashionShop')
        .then(res=>{
            var products = res.data;
            this.setState({products})
        }
        )
    }
    render() {
        return (
            <div> {this.state.products.map(product=><div><h1>Name: {product.name}</h1></div>) } </div>
        );
    }
}

export default Dad;