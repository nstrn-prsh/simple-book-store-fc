import React, { Component, Fragment } from "react";
import Controls from "./Controls";

// e62
const prices = {
     product1: 11,
     product2: 22,
     product3: 33,
     product4: 44,
};
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

     //  e62
     // tedade yek mahsool - gheymate nahaii
     addProductHandler = (type) => {
          // tedade ghablie ye mahsool khas va be dast avardane meghdare jadid
          const prevCount = this.state.products[type];
          const updatedCount = prevCount + 1;
          // araye mahsoolat to state update beshe
          const updatedProducts = { ...this.state.products };
          updatedProducts[type] = updatedCount;

          const priceAdd = prices[type];
          const prevPrice = this.state.totalPrice;
          const newPrice = prevPrice + priceAdd;

          this.setState({ totalPrice: newPrice, products: updatedProducts });

          console.log("it is working");
     };

     render() {
          return (
               <Fragment>
                    <Controls productAdd={this.addProductHandler} />
               </Fragment>
          );
     }
}

export default Shopping;
