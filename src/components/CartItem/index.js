import React from 'react';
import './style.css';

function CartItem(props){
    function removeCartItem(id){
        
    }
    // console.log(
    // props
    // )
    
   
    return (
        <div className="CartItem">
            <div className="cart-item-info">
                <div className="cart-img-div">
                    <img src={props.image.href}  alt= "kulu spark shoes for men"/>
                </div>
                <div className="info-details">
                    <p className="p name">{props.name}</p>
                    <p className="p sku">{props.sku}</p>
                </div>
            </div>

            <div className="item-actions center">
                   <div className="quantity center-col">
                        <p className="p">
                            Quantity
                        </p>
                        <span className="p">{props.quantity}</span>
                   </div>

                   <div className="actions">
                    <p className="p cart-item-amount"> ${props.value.amount}</p>
                   <button className="btn-remove" onClick={()=>props.removeFunction(props.id)}>Remove</button>
                   </div>
            </div>
        </div>
    );
}

export default CartItem;