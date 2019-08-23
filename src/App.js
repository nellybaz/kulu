import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import './App.css';
import DynamicImport from '../src/config/lazy_route';
import Header from './components/Header';
import Footer from './components/Footer';
import AdsBanner from './components/AdsBanner';
import { gateway as MoltinGateway } from '@moltin/sdk'


//enables lazy loading of components and helps in code splitting
const lazyLoad = (props, link) => {
  return (
    <DynamicImport load={() => link}>
      {(Component) => Component === null
        ? <div style={{ width: "200px", margin: '50vh 45%' }}>
          <p>Loading please wait....</p>
        </div>
        :
        <Component {...props} />
      }
    </DynamicImport>
  )
}
const ProductsPage = (props) => lazyLoad(props, import('./views/Products/'))
const SingleProduct = (props) => lazyLoad(props, import('./views/SingleProduct'))
const Cart = (props) => lazyLoad(props, import('./views/Cart'))
const Checkout = (props) => lazyLoad(props, import('./views/Checkout'))


const Moltin = MoltinGateway({
  // this is exposed on git so it can be tested
  client_id: 'XLN7jy6eCDB49zvV2Jnxl9orLpOjyZE6OSWQFupzaK'
})

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
        productList: [],
        productImages:[],
        cart:[],
        selectedIndex:0,
    }
}


// called by children components ==> cart 
removeItemFromCart=(id)=>{
  Moltin.Cart().RemoveItem(id).then(res =>{
    console.log(res);
    this.setState({
      cart:res.data,
    })
    
  })
}


// callled by children component  ==> singleProduct page
updateCart=(cart)=>{
  this.setState({
    cart:cart,
  });
}

componentDidMount() {
    Moltin.Authenticate().then(response => {
        console.log('authenticated', response)
    });

    Moltin.Products.With('main_image').All().then(res => 
       {
        console.log(res);
        
        this.setState({
            productList : res.data,
            productImages: res.included.main_images,
        })
       }
    );

    Moltin.Cart().Items().then(res => {
      console.log(res);
       this.setState(
         {
          cart: res.data,
         }
       );
    });
}
  render(){
    return (
      <div className="App">
        
        <Router>
        <Header cart={this.state.cart}/>
          <Switch>
            <Route exact path="/products" component={props => <ProductsPage {...this.state}/>} />
            <Route exact path="/product/:product_id" component={props => <SingleProduct {...props} state={this.state} updateCart={this.updateCart}/>} />
            <Route exact path="/cart" component={props => <Cart {...this.state} removeFunction={this.removeItemFromCart} />} />
            <Route exact path="/checkout" component={props => <Checkout {...props} />} />
            <Redirect from="/" to="/products" />
          </Switch>
          <AdsBanner text={adsText} />
        </Router> 
        <Footer />
      </div>
  
    );

  }
 
}



const adsText = <p className="p">
    Use code <span>SAVE50</span> at checkout for 50% off all orders
</p>;

export default App;
