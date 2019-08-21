import React from 'react';
import {Router, Switch, Route} from 'react-router-dom'
import ProductsPage from './views/Products/';

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/" to={ProductsPage}/>
      </Switch>
    </Router>
  );
}

export default App;
