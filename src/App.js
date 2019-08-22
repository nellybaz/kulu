import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import DynamicImport from '../src/config/lazy_route';


//enables lazy loading of components and helps in code splitting
const lazyLoad=(props, link)=>{
  return (
      <DynamicImport load={() => link}>
          {(Component) => Component === null
          ? <div style={{ width:"200px", margin: '50vh 45%'}}>
              <p>Loading please wait....</p>
          </div>
          :
          <Component {...props} />
          }
      </DynamicImport>
  ) 
}



const ProductsPage =(props) => lazyLoad(props, import('./views/Products/'))
function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={ProductsPage}/>
      </Switch>
    </Router>
  );
}

export default App;
