import React, { Component } from "react";
import ProductList from "./../Component/Product/ProductList";
import Main from "./../Component/Product/Main";
import "./App.css";
import Wrapper from "./../Component/Container/Wrapper";

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

     render() {
          console.log("App.js render()");

          let products = null;

          if (this.state.showProducts) {
               products = (
                    <ProductList
                         products={this.state.products}
                         click={this.handleDeleteProduct}
                         change={this.changeTitleHandler}
                    />
               );
          }

          return (
               <Wrapper center='center'>
                    {/* e42 */}
                    <button
                         onClick={() => {
                              this.setState({ showMain: false });
                         }}
                    >
                         show/hide
                    </button>
                    {this.state.showMain ? (
                         <Main
                              products={this.state.products}
                              click={this.toggleProducts}
                         />
                    ) : null}
                    {products}
               </Wrapper>
          );
     }
}

export default App;
