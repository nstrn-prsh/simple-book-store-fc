import React, { Component, createRef } from "react";
import "./Product.css";
import { AuthContext } from "./../Context/AuthContext";
import { Hoc } from './../container/Hoc';
import Wrapper from './../container/Wrapper';

class Product extends Component {
     //  e48
     constructor(props) {
          super(props);
          this.inputRef = createRef();
     }

     // e52
     static contextType = AuthContext

     componentDidMount() {
          // this.inputElement.focus();
          this.inputRef.current.focus();
     }

     render() {
          const name = "book";
          return (
               <Hoc>
                         {this.context.auth ? (
                                   <p>logged in!</p>
                              ) : (
                                   <p>please log in!</p>
                              )
                         }
                    <h3>it is a product {name}.</h3>
                    <h5 onClick={this.props.clickThis}>
                         name: {this.props.title}.
                    </h5>
                    <h5>price: {this.props.price}.</h5>
                    <input
                         // ref={(element) => (this.inputElement = element)}
                         ref={this.inputRef}
                         type='text'
                         onChange={this.props.changeThis}
                         value={this.props.title}
                    />
                    <p>{this.props.children}</p>
               </Hoc>
          );
     }
}

export default Wrapper(Product, "product");
