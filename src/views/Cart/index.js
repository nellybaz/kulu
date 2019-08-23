import React, { Component } from 'react';
import './style.css';
import CartItem from '../../components/CartItem';
import { Link } from 'react-router-dom';


class Cart extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let subTotal = 0;
        this.props.cart.forEach(item => {
            subTotal += item.value.amount
        });

        return (
            <div className="Cart center-col">
                <h3 className="heading">Shopping Cart</h3>

                <div className="cart-list-container">
                    {this.props.cart.map(item => <CartItem key={item.id} removeFunction={this.props.removeFunction}  {...item} />)}

                    {this.props.cart.length < 1  && <h4 className="p-price center">No Items in Cart, continue Shopping</h4> }
                </div>

                <div className="action">
                   {
                       this.props.cart.length > 0 &&
                        <div>
                        <h3 className="p-price">Sub total</h3>
                        <p className="heading">${subTotal}</p>
                        <Link to="/checkout" className="p">Continue to checkout</Link>
                    </div>
                   }
                </div>

            </div>
        );
    };
}


export default Cart;