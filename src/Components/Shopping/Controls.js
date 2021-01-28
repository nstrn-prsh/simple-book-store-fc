import React from "react";
import Builder from "./Builder";
import "./../componentCss/controls.css";

const products = [
     { title: "product 1", type: "product1" },
     { title: "product 2", type: "product2" },
     { title: "product 3", type: "product3" },
];

const Controls = (props) => {
     return (
          <div className='controls'>
               <p className='totalPrice'> total price:{props.price} </p>
               {products.map((item) => (
                    <Builder
                         add={() => props.productAdd(item.type)}
                         remove={() => props.productRemove(item.type)}
                         key={item.title}
                         title={item.title}
                    />
               ))}
               <button className='orderBtn' onClick={props.order}>
                    order!
               </button>
          </div>
     );
};

export default Controls;
