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

          return (
               <div className='center'>
                    <h2>Book App</h2>
                    <p>Hello World!</p>
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
                         clickThis={() => this.changePriceHandler("New Title")}
                    />

                    <button
                         style={btn}
                         onClick={this.changePriceHandler.bind(
                              this,
                              "new Title"
                         )}
                    >
                         click on me!
                    </button>
               </div>
          );
     }
}

export default App;
