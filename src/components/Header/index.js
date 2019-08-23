import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'


function Header(props) {
    return (
        <div className="Header">
            <div className="nav-links">
                <ul>
                    <li >
                        <a className="p-nav" href="/products">Products</a>
                    </li>
                    <li >
                        <a className="p-nav" href="/about">About</a>
                    </li>
                    <li >
                        <a className="p-nav" href="/collections">Collections</a>
                    </li>
                </ul>
            </div>
            <div className="logo center">
                <h2 className="heading" >KULU</h2>
            </div>
            <div className="cart">
                <a href="/cart">
                <img src={require('../../assets/img/icons/shopping-bag.svg')} alt="shop with kulu" />
                </a>
            </div>
        </div>
    );
}

export default Header;