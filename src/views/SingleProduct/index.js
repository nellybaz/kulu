import React from 'react';
import './style.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdsBanner from '../../components/AdsBanner';
import { gateway as MoltinGateway } from '@moltin/sdk'

const adsText = <p className="p">
    Use code <span>SAVE50</span> at checkout for 50% off all orders
</p>;

const Moltin = MoltinGateway({
    client_id: 'XLN7jy6eCDB49zvV2Jnxl9orLpOjyZE6OSWQFupzaK'
})


class SingleProduct extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            product :{},
            productImg:'',
        }
    }

    componentDidMount(){
        Moltin.Authenticate().then(response => {
            console.log('authenticated', response)
        });

        let productID = this.props.match.params.product_id;
        console.log(productID);

        Moltin.Products.With('main_image').Get(productID).then(res => {
                console.log(res);
                this.setState({
                    product: res.data,
                    productImg: res.included.main_images[0].link.href,
                });
                
        });
        
    }

    addToCart=()=>{
        let productID = this.props.match.params.product_id;
        Moltin.Cart().AddProduct(productID, 1).then(res => {
            console.log(res);
        })
    }
    render() {
        return (
            <div className="SingleProduct">
                <div className="container">
                    <div className="img-div">
                        <img src={this.state.productImg} alt="kulu's finest product for your sale" />
                    </div>

                    <div className="prod-info">
                        <div className="price-section">
                            <h4 className="p">
                                {/* {this.state.product.price[0]} */}
                                $200
                            <span>
                                    IN STOCK
                            </span>
                            </h4>

                            <p className="p big">
                                {this.state.product.name}
                            </p>

                            <div className="btn-div">
                                <input type="number" min="1" max="10" />
                                <button 
                                className="btn-send"
                                >Add to cart</button>
                            </div>

                        </div>

                        <div className="info-desc">
                            <strong className="p bold"> Description</strong>
                            <p className="p p-text">
                                {this.state.product.description}
                            </p>
                        </div>

                    </div>


                </div>
                <AdsBanner text={adsText} />
            </div>
        );
    };
}


export default SingleProduct;
