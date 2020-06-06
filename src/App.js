import React from 'react';
import {Switch, Route } from 'react-router-dom'
import HomePage from "./pages/homepage/homepage.component";
import './App.css';


const HatsPage = () => (
  <div>
    <h1>HatsPage</h1>
  </div>
);


function App() {
  return (
    <div>

      <Route exact path='/' component={HomePage}/>
      <Route exact path='/hats' component={HatsPage}/>

    
    </div>
  );
}

export default App;
