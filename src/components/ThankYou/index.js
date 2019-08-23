import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';


function ThankYou(){
    return(
        <div className="ThankYou center-col">
            <img title="thanks for shopping with zulu" src={require('../../assets/img/check.svg')} alt="thanks for shopping with zulu"/>
            <h2 className="heading">Order Completed</h2>
            <p className="p">Thank you for your order</p>
            <span className="p">Order ID: 379752374FHEWUFGH93Y4</span>

            <Link to="/" className="p">Continue Shopping</Link>
        </div>
    );
}

export default ThankYou;