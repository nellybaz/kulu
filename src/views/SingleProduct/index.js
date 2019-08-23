import React from 'react';
import './style.css';
import { gateway as MoltinGateway } from '@moltin/sdk'

const Moltin = MoltinGateway({
    client_id: 'XLN7jy6eCDB49zvV2Jnxl9orLpOjyZE6OSWQFupzaK'
})


class SingleProduct extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            product :{},
            productImg:'',
            quantity: 1,
        }
    }

    componentDidMount(){
        console.log(
            this.props
        );
        
        Moltin.Authenticate().then(response => {
            console.log('authenticated', response)
        });

        let productID = this.props.match.params.product_id;
        console.log(productID);

        for(let i=0; i < this.props.state.productList.length; i++){
            if(this.props.state.productList[i]['id'] == productID){
                this.setState({
                    product : this.props.state.productList[i],
                    productImg : this.props.state.productImages[i].link.href
                })
                break;
            }
        }
    
    }

    /// update the selected quantity
    handleQuantityChange =(e)=>{
      
        this.setState({
            quantity: e.target.value
        });
    }
        
    addToCart=()=>{
        let productID = this.props.match.params.product_id;

        Moltin.Cart().AddProduct(productID, this.state.quantity).then(res => {
            console.log(res);

            //after updating cart, get the new cart and push to parent component
            Moltin.Cart().Items().then(res => {
                console.log(res);
                this.props.updateCart(res.data)
            });
        })
    }
    render() {
        return (
            <div className="SingleProduct">
                <div className="container grid-mobile">
                    <div className="img-div">
                        <img src={this.state.productImg} alt="kulu's finest product for your sale" />
                    </div>

                    <div className="prod-info">
                        <div className="price-section">
                            <h4 className="p">
                                {'$200'}
                            <span>
                                    IN STOCK
                            </span>
                            </h4>

                            <p className="p big">
                                {this.state.product.name}
                            </p>

                            <div className="btn-div">
                                <select onChange={this.handleQuantityChange}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                </select>
                                <button 
                                onClick={this.addToCart}
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
            </div>
        );
    };
}


export default SingleProduct;
