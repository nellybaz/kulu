import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';


class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state={
            subTotal:0
        }

    }


    componentDidMount(){
        let subT = 0;
        this.props.cart.forEach(item => {
            subT += item.value.amount
        });
        this.setState({
            subTotal: subT
        })

        
    }
    render() {
        return (
            <div className="Checkout center-col">

                <h3 className="heading">Checkout</h3>

                <div className="checkout-container">
                    <div className="contact-info">
                        <h3 className="p">Contact Information</h3>
                        <div>
                            <input type="text" name="first_name"  placeholder="Enter your name" required/>
                            <input type="text" name="last_name"  placeholder="Enter Last name" required/>
                        </div>

                        <div>
                            <button onClick={()=>this.props.checkoutAction()} title="Checkout and thanks for shopping" className="btn-checkout-zulu">Checkout</button>
                        </div>

                    </div>

                    <div className="shopping-cart">
                        <h3 className="p">Shopping Cart</h3>
                        <div className="list">
                            {this.props.cart.map(item => 
                                <div className="checkout-list--item">
                                    <div className="img--info">
                                        <img src={item.image.href} alt="zulu shop online"/>
                                        <div>
                                            <p className="p name">{item.name}</p>
                                            <p className="p sku">{item.sku}</p>
                                        </div>
                                    </div>

                                    <div className="price--info center">
                                            <p className="p">${item.value.amount}</p>
                                    </div>
                                </div> 
                            )}

                        </div>
                        <div className="value">
                            <span className="p-price">Sub total</span>
                            <p className="heading">${this.state.subTotal}</p>
                        </div>
                    </div>
                </div>


            </div>
        );
    };
}


export default Checkout; 