import React from 'react'

const Product = (props) => {
    const name= 'book'
    return ( 
        <div>
            <h3>it is a product {name}.</h3>
            <h5>name: {props.title}.</h5>
            <h5>price: {props.price}.</h5>
            <h5>{props.children}</h5>
        </div>
     );
}
 
export default Product;