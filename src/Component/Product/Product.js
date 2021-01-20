import React from "react";
import "./Product.css";

const Product = (props) => {
     const name = "book";
     return (
          <div className='product'>
               <h3>it is a product {name}.</h3>
               <h5>name: {props.title}.</h5>
               <h5 onClick={props.clickThis}>price: {props.price}.</h5>
               <p>{props.children}</p>
          </div>
     );
};

export default Product;
