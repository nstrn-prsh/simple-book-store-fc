import React from "react";
import "./Product.css";
import Wrapper from './../Container/Wrapper';

const Product = (props) => {
     // console.log('Product');

     const name = "book";
     return (
          <div className='product'>
               <h3>it is a product {name}.</h3>
               <h5 onClick={props.clickThis}>name: {props.title}.</h5>
               <h5>price: {props.price}.</h5>
               <input type="text" onChange={props.changeThis} value={props.title}/>
               <p>{props.children}</p>
          </div>
     );
};

export default Wrapper(Product, 'product');
