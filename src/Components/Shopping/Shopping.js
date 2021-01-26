import React, { Component, Fragment } from "react";
import Controls from "./Controls";

class Shopping extends Component {
     state = {
          products: {
               product1: 0,
               product2: 0,
               product3: 0,
               product4: 0,
          },
          totalPrice: 0,
     };
     render() {
          return (
               <Fragment>
                    <Controls />
               </Fragment>
          );
     }
}

export default Shopping;
