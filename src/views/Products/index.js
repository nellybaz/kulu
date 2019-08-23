import React, { Component } from 'react';
import './style.css';
import Card from '../../components/Card';
import { Link } from 'react-router-dom';


class Products extends Component {
    render() {
        return (
            <div className="Products">
                <section className="products-container center-col">
                    <h3 className="heading">All Products</h3>
 
                    <div className="products-list">
                        {
                            this.props.productList.map((item, index)=>   
                                <Link key={item.id} to={`/product/${item.id}`}>
                                    <Card {...item} imgs={this.props.productImages} index={index}/>
                                </Link>)
                        }
                    </div>
                </section>

                
            </div>
        );
    };
}
 

export default Products;