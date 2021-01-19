import React, { Component } from "react";
import Product from "./Component/Product/Product";
class App extends Component {
     state = {
          products: [
               { title: "Book 1", price: 100 },
               { title: "Book 2", price: 200 },
               { title: "Book 3", price: 300 },
          ],
     };

     changePriceHandler = () => {
          console.log("this is working!");
     };

     render() {
          return (
               <div className='container'>
                    <h2>React App</h2>
                    <p>Hello World!</p>
                    <Product
                         title={this.state.products[0].title}
                         price={this.state.products[0].price}
                    />
                    <Product
                         title={this.state.products[1].title}
                         price={this.state.products[1].price}
                    >
                         Discount: 20%
                    </Product>
                    <Product
                         title={this.state.products[2].title}
                         price={this.state.products[2].price}
                    />

                    <button onClick={this.changePriceHandler}>
                         click on me!
                    </button>
               </div>
          );
     }
}

export default App;
