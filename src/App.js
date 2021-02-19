import React from 'react';
import {Route } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'

import './App.css';

import Home from './pages/home.component'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'

function App() {
  return (
    <div className="App">
        <div>
   
          <Router>
          <Header/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/shop' component={ShopPage}/>

          </Router>
   
        </div>
    </div>
  );
}

export default App;
