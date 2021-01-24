import React, { Component } from "react";
import { AuthContext } from "./../Component/Context/AuthContext";
import ProductList from "./../Component/Product/ProductList";
import Main from "./../Component/Product/Main";
import "./App.css";
import { Hoc } from './../Component/container/Hoc';
import Wrapper from './../Component/container/Wrapper';

class App extends Component {
     // e36
     // in props az Component miad chon App azash extend shode
     constructor(props) {
          super(props);
          console.log("App.js constructor()");
     }

     state = {
          products: [
               { id: 1, title: "Book 1", price: 100 },
               { id: 2, title: "Book 2", price: 200 },
               { id: 3, title: "Book 3", price: 300 },
          ],
          showProducts: false,
          showMain: true,
          auth: false,
     };

     // e36
     componentDidMount() {
          console.log("App.js componentDidMount()");
     }

     // e39
     shouldComponentUpdate(nextProps, nextState) {
          console.log("App.js shouldComponentUpdate()");
          return true;
     }

     componentDidUpdate(prevProps, prevState) {
          console.log("App.js componentDidUpdate()");
     }

     // e32
     changeTitleHandler = (event, id) => {
          const products = [...this.state.products];
          const productIndex = products.findIndex((item) => item.id === id);
          const product = { ...products[productIndex] };
          product.title = event.target.value;

          products[productIndex] = product;
          this.setState({ products });
     };

     toggleProducts = () => {
          const show = this.state.showProducts;
          this.setState({ showProducts: !show });
     };

     // e29
     handleDeleteProduct = (productIndex) => {
          const products = [...this.state.products];
          products.splice(productIndex, 1);
          this.setState({ products });
     };

     // e50
     loginHandler = () => {
          this.setState({ auth: true });
     };

     render() {
          console.log("App.js render()");

          let products = null;

          if (this.state.showProducts) {
               products = (
                    <ProductList
                         products={this.state.products}
                         click={this.handleDeleteProduct}
                         change={this.changeTitleHandler}
                         isAuth={this.state.auth}
                    />
               );
          }

          return (
               <Hoc>
                    {/* e42 */}
                    <button
                         onClick={() => {
                              this.setState({ showMain: false });
                         }}
                    >
                         show/hide
                    </button>
                    <AuthContext.Provider
                         value={{
                              auth: this.state.auth,
                              login: this.loginHandler,
                         }}
                    >
                         {this.state.showMain ? (
                              <Main
                                   products={this.state.products}
                                   click={this.toggleProducts}
                              />
                         ) : null}
                         {products}
                    </AuthContext.Provider>
               </Hoc>
          );
     }
}

export default Wrapper(App, "center");
