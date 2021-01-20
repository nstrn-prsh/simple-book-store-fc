import React, { Component } from "react";
import Product from "./Component/Product/Product";
import "./App.css";

class App extends Component {
     state = {
          products: [
               { title: "Book 1", price: 100 },
               { title: "Book 2", price: 200 },
               { title: "Book 3", price: 300 },
          ],
          showProducts: false,
     };

     changeTitleHandler = (event) => {
          this.setState({
               products: [
                    { title: "Book 1", price: 100 },
                    { title: event.target.value, price: 200 },
                    { title: "Book 3", price: 300 },
               ],
          });
     };

     changePriceHandler = (newTitle) => {
          console.log("this is working!");
          this.setState({
               products: [
                    { title: newTitle, price: 10 },
                    { title: "Book 2", price: 20 },
                    { title: "Book 3", price: 30 },
               ],
          });
     };

     toggleProducts = () => {
          const show = this.state.showProducts;
          this.setState({ showProducts: !show });
     };

     render() {
          const btn = {
               backgroundColor: "#7b1fa2",
               color: "#ffffff",
               font: "inherit",
               border: "none",
               outline: "none",
               borderRadius: "3px",
               padding: "0.6rem",
               margin: "0.6rem auto",
          };

          let products = null;

          if (this.state.showProducts) {
               products = (
                    <div>
                         <Product
                              title={this.state.products[0].title}
                              price={this.state.products[0].price}
                         />
                         <Product
                              title={this.state.products[1].title}
                              price={this.state.products[1].price}
                              changeThis={this.changeTitleHandler}
                         >
                              Discount: 20%
                         </Product>
                         <Product
                              title={this.state.products[2].title}
                              price={this.state.products[2].price}
                              clickThis={() =>
                                   this.changePriceHandler("New Title")
                              }
                         />
                    </div>
               );
          }

          return (
               <div className='center'>
                    <h2>Book App</h2>
                    <p>Hello World!</p>

                    <button
                         style={btn}
                         // onClick={this.changePriceHandler.bind(this,"new Title")}
                         onClick={this.toggleProducts}
                    >
                         click on me!
                    </button>

                    {products}
               </div>
          );
     }
}

export default App;
