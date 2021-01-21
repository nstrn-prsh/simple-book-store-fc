import React from "react";
import Product from "./Product";

const ProductList = ({products, click, change}) => {
     return (
          <div>
               {products.map((item, index) => (
                    <Product
                         key={item.id}
                         title={item.title}
                         price={item.price}
                         clickThis={() => click(index)}
                         changeThis={(event) => change(event, item.id)}
                    />
               ))}
          </div>
     );
};

export default ProductList;
