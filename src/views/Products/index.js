import React, { Component } from 'react';
import Header from '../../components/Header';
import './style.css';
import Card from '../../components/Card';
import { link } from 'fs'; 
import {Link} from 'react-router-dom';
import AdsBanner from '../../components/AdsBanner';

const list = [
    {'product_name': 'Product 1',
    'product_price': '289'
},

{'product_name': 'Product 1',
    'product_price': '289'
},

{'product_name': 'Product 1',
    'product_price': '289'
},

{'product_name': 'Product 1',
    'product_price': '289'
},

{'product_name': 'Product 1',
    'product_price': '289'
},
{'product_name': 'Product 1',
    'product_price': '289'
}
];

const adsText = <p className="p">
Use code <span>SAVE50</span> at checkout for 50% off all orders
</p>;


class Products extends Component{
    render(){
        return(
            <div className="Products">
                <Header />

                <section className="products-container center-col">
                    <h3 className="heading">All Products</h3>
 
                    <div className="products-list">
                        {
                            list.map((item)=>   
                                <Link to={`/product/`}>
                                <Card {...item}/>
                                </Link>)
                        }
                    </div>
                </section>

                <AdsBanner text={ adsText }/>
            </div>
        );
    };
}


export default Products;