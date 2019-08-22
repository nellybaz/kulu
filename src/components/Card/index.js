import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';
import PropTypes from 'prop-types';


function Card(props){
    return(
        <div className="Card">
            <div className="card-img">
                <img src={require('../../assets/img/sample_img.png')} alt="kulu product for sale" />
             </div>
            
            <div className="card-info">
                <p className="p">{props.product_name}</p>
                <p className="p-price">${props.product_price}</p>
            </div>

        </div>
    );
}

Card.propTypes = {
    product_name: PropTypes.string.isRequired,
    product_price: PropTypes.string.isRequired
}

export default Card;