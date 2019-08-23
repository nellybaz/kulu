import React, { Component } from 'react';
import './style.css';
import CartItem from '../../components/CartItem';
import {Link} from 'react-router-dom';


class Cart extends Component {
    constructor(props){
        super(props)
    }
    render() {
        console.log(this.props);
        
        return (
            <div className="Cart center-col">
                <h3 className="heading">Shopping Cart</h3>

                <div className="cart-list-container">
                    {this.props.cart.map(item => <CartItem key={item.id} removeFunction={this.props.removeFunction}  {...item}/>)}
                </div>

                <div className="action">
                    <h3>Sub total</h3>
                    <p>$23000</p>
                    <Link to="/checkout">Continue to checkout</Link>
                </div>
                
            </div>
        );
    };
}
 

export default Cart;