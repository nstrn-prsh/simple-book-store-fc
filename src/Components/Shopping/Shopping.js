import React, { Component, Fragment } from "react";

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
                    <p>shopping controller!</p>
               </Fragment>
          );
     }
}

export default Shopping;
