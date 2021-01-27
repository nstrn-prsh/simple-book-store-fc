import React, { Fragment } from "react";

const Order = (props) => {
     return (
          <Fragment>
               <h3>order!</h3>
               <ul>
                    {Object.keys(props.products).map((item) => (
                         <li key={item}>
                              {item} : {props.products[item]}
                         </li>
                    ))}
               </ul>
          </Fragment>
     );
};

export default Order;
