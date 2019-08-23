import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';
import PropTypes from 'prop-types';




function Card(props){
    return( 
        <div className="Card">
            <div className="card-img">
                <img 
                src={props.imgs[props.index].link.href} 
                alt="kulu product for sale" />
             </div>
            
            
            <div className="card-info">
                <p className="p">{props.name}</p>
                <p className="p-price">${props.price[0].amount}</p>
            </div>

        </div>
    ); 
}


Card.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.array.isRequired
}

export default Card;