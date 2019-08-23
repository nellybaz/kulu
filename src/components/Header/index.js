import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'


function Header(props) {
    let cartNumber = 0;
    for(let i = 0; i < props.cart.length; i++){
        cartNumber += props.cart[i].quantity;
    }
    return ( 
        <div className="Header">
            <div className="nav-links mobile-hide">
                <ul>
                    <li >
                        <Link className="p-nav" to="/products">Products</Link>
                    </li>
                    <li >
                        <Link className="p-nav" to="/about">About</Link>
                    </li>
                    <li >
                        <Link className="p-nav" to="/collections">Collections</Link>
                    </li>
                </ul>
            </div>
            <div className="logo center">
                <h2 className="heading" >KULU</h2>
            </div>

            {/* mobile nav options starts */}
                <Link to="/" className="p mob-store-link desktop-hide">Store</Link>
            {/* mobile nav options ends*/}

            <div className="cart">
                <Link to="/cart">
                    {props.cart.length > 0  && <p className="p">{cartNumber}</p>}
                <img src={require('../../assets/img/icons/shopping-bag.svg')} alt="shop with kulu" />
                </Link>
            </div>
        </div>
    );
}

export default Header;