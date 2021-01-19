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

     changePriceHandler = () => {
          console.log("this is working!");
          this.setState({
               products: [
                    { title: "Book 1", price: 10 },
                    { title: "Book 2", price: 20 },
                    { title: "Book 3", price: 30 },
               ],
          });
     };

     render() {
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

// const App = () => {
//      const [productState, setProductState] = useState({
//           products: [
//                { title: "Book 1", price: 100 },
//                { title: "Book 2", price: 200 },
//                { title: "Book 3", price: 300 },
//           ],
//      });
//      const changePriceHandler = () => {
//           setProductState({
//                products: [
//                     { title: "Book 1", price: 10 },
//                     { title: "Book 2", price: 10 },
//                     { title: "Book 3", price: 10 },
//                ],
//           });
//      };

//      return (
//           <div className='container'>
//                <h2>React App</h2>
//                <p>Hello World!</p>
//                <Product
//                     title={productState.products[0].title}
//                     price={productState.products[0].price}
//                />
//                <Product
//                     title={productState.products[1].title}
//                     price={productState.products[1].price}
//                >
//                     Discount: 20%
//                </Product>
//                <Product
//                     title={productState.products[2].title}
//                     price={productState.products[2].price}
//                />

//                <button onClick={changePriceHandler}>click on me!</button>
//           </div>
//      );
// };

// export default App;
