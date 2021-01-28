import React, { Component, Fragment } from "react";
import Controls from "./Controls";
import Modal from "./../UIelement/Modal";
import Order from "./Order";

// e62
const prices = {
     product1: 11,
     product2: 22,
     product3: 33,
};
class Shopping extends Component {
     state = {
          products: {
               product1: 0,
               product2: 0,
               product3: 0,
          },
          totalPrice: 0,
          purchased: false,
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
     };

     //  e63
     removeProductHandler = (type) => {
          const prevCount = this.state.products[type];
          const updatedCount = prevCount - 1;
          const updatedProduct = { ...this.state.products };
          updatedProduct[type] = updatedCount;

          const priceSub = prices[type];
          const pervPrice = this.state.totalPrice;
          const newPrice = pervPrice - priceSub;

          this.setState({ totalPrice: newPrice, products: updatedProduct });
     };

     //  e67
     purchasedHandler = () => {
          this.setState({ purchased: true });
     };

     //  e68
     modalCloseHandler = () => {
          this.setState({ purchased: false });
     };

     //  e70
     purchaseConfirmHandler = () => {
          console.log("purchaseConfirmHandler");
     };

     render() {
          return (
               <Fragment>
                    <Modal
                         show={this.state.purchased}
                         modalClose={this.modalCloseHandler}
                    >
                         <Order
                              products={this.state.products}
                              totalPrice={this.state.totalPrice}
                              confirm={this.purchaseConfirmHandler}
                              cancel={this.modalCloseHandler}
                         />
                    </Modal>
                    <Controls
                         productAdd={this.addProductHandler}
                         productRemove={this.removeProductHandler}
                         price={this.state.totalPrice}
                         order={this.purchasedHandler}
                    />
               </Fragment>
          );
     }
}

export default Shopping;
