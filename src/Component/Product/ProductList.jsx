import React, {Component} from "react";
import Product from "./Product";
class  ProductList extends Component {
     // e38
    shouldComponentUpdate(nextProps, nextState){
        console.log('ProductList shouldComponentUpdate');
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('ProductList getSnapshotBeforeUpdate');
        return null
    }

    componentDidUpdate(prevProps, prevState, snapShot){
        console.log('ProductList componentDidUpdate');
    }

    render() { 
        // e36
        console.log('ProductList');
       
        return (
            <div>
                 {this.props.products.map((item, index) => (
                      <Product
                           key={item.id}
                           title={item.title}
                           price={item.price}
                           clickThis={() => this.props.click(index)}
                           changeThis={(event) => this.props.change(event, item.id)}
                      />
                 ))}
            </div>
       );
    }
}

export default ProductList;