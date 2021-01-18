import React, { Component } from "react";
import Product from "./Component/Product/Product";
class App extends Component {
     render() {
          return (
               <div className='container'>
                    <h2>React App</h2>
                    <p>Hello World!</p>
                    <Product title="cheese 2" price="200" />
                    <Product title="cheese 3" price="300" >
                        Discount: 20%
                    </Product>
                    <Product title="cheese 4" price="400" />
               </div>
          );
     }
}

export default App;