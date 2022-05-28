import React,{ Component } from 'react';

const addToCart = (name) => {
    alert ("Thanks you for your buying " + name);
}

const Products = ({img, name, price}) => {
    return (
        <div className="product col-3">
            <img 
                src = {img} 
                alt = "" 
                style = {{height: 250, width: "auto"}} 
            />
            <p>Name: {name} </p>
            <p className='price'>Price: <span className="price text-danger"></span> {price} </p>
            <button onClick={() => addToCart (name)} type="submit">Mua</button>
        </div>
    );
}



export default Products;