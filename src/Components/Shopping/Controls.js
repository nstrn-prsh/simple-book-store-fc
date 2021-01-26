import React from "react";
import Builder from "./Builder";
import "./ShoppingCss/controls.css";

const products = [
     { title: "product 1", type: "product1" },
     { title: "product 2", type: "product2" },
     { title: "product 3", type: "product3" },
];

const Controls = ({ productAdd, productRemove }) => {
     return (
          <div className='controls'>
               {products.map((item) => (
                    <Builder
                         add={() => productAdd(item.type)}
                         remove={() => productRemove(item.type)}
                         key={item.title}
                         title={item.title}
                    />
               ))}
          </div>
     );
};

export default Controls;
