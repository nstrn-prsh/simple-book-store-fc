import React, { Component } from "react";
import ProductList from "./../Component/Product/ProductList";
import Main from "./../Component/Product/Main";
import "./App.css";

class App extends Component {
     state = {
          products: [
               { id: 1, title: "Book 1", price: 100 },
               { id: 2, title: "Book 2", price: 200 },
               { id: 3, title: "Book 3", price: 300 },
          ],
          showProducts: false,
     };

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
               <div className='center'>
                    <Main click={this.toggleProducts} />
                    {products}
               </div>
          );
     }
}

export default App;
