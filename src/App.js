import React from 'react';
import {Route } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/home.component'
import ShopPage from './pages/shop/shop.component';
import './App.css';

function App() {
  return (
    <div className="App">
        <div>
          <Router>
  
            <Route exact path='/' component={Home}/>
            <Route exact path='/hats' component={ShopPage}/>

          </Router>
   
        </div>
    </div>
  );
}

export default App;
