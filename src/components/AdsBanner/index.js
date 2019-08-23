import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

function AdsBanner(props){
    return(
        <div className="Banner center">
           {props.text}
        </div>
    )
}

AdsBanner.propTypes = {
    text : PropTypes.object.isRequired,
}
export default AdsBanner;