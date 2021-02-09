import React, { Component, Fragment } from "react";
import Controls from "./Controls";
import Modal from "./../UIelement/Modal";
import Order from "./Order";
import axios from "./../../axios";
import Loading from "../UIelement/Loading";

// e62
const prices = {
     product1: 11,
     product2: 22,
     product3: 33,
};
class Shopping extends Component {
     state = {
          products: null,
          totalPrice: 0,
          purchased: false,
          loader: false,
     };

     //  e94
     componentDidMount() {
          console.log(this.props);
          axios.get(
               "https://react2nd-9d0e2-default-rtdb.firebaseio.com/products.json"
          ).then((res) => this.setState({ products: res.data }));
     }

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

     purchaseConfirmHandler = () => {
          this.props.history.push('/checkout')
          /*
          this.setState({ loader: true });
          //  e92
          const order = {
               products: this.state.products,
               totalPrice: this.state.totalPrice,
               customer: {
                    name: "nas",
                    email: "nastaran.p.sh.77@gmail.com",
               },
          };
          //  nokte: chon ba firebase kar mikonim hatman bayad .json ro benevisim
          axios.post("/orders.json", order)
               .then((res) =>
                    this.setState({ loader: false, purchased: false })
               )
               .catch((err) =>
                    this.setState({ loader: false, purchased: false })
               );
               */
     };

     render() {
          let order = null;
          if (this.state.loader) order = <Loading />;

          //  e94
          let control = <Loading />;
          if (this.state.products) {
               control = (
                    <Controls
                         productAdd={this.addProductHandler}
                         productRemove={this.removeProductHandler}
                         price={this.state.totalPrice}
                         order={this.purchasedHandler}
                    />
               );
               //  e93
               order = (
                    <Order
                         products={this.state.products}
                         totalPrice={this.state.totalPrice}
                         confirm={this.purchaseConfirmHandler}
                         cancel={this.modalCloseHandler}
                    />
               );
          }

          return (
               <Fragment>
                    <Modal
                         show={this.state.purchased}
                         modalClose={this.modalCloseHandler}
                    >
                         {order}
                    </Modal>
                    {control}
               </Fragment>
          );
     }
}

export default Shopping;
