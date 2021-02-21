import React from 'react';
import {Route } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'

import './App.css';

import Home from './pages/home.component'
import ShopPage from './pages/shop/shop.component';
import signInSignUp from './pages/signIn-signUp/sign-in-sign-up.component'
import Header from './components/header/header.component'

import {auth, createUserProfileDocument} from './firebase/firebase.utils'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      currentUser: null,
    }
    
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)

         await userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
            id: snapshot.id,
              ...snapshot.data()
            }
          }, console.log(this.state))
        });
    
      } 
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
    return (
      <div className="App">
          <div>
     
            <Router>
            <Header CurrentUser={this.state.CurrentUser}/>
              <Route exact path='/' component={Home}/>
              <Route exact path='/shop' component={ShopPage}/>
              <Route exact path='/signin' component={signInSignUp}/>
  
            </Router>
     
          </div>
      </div>
    );

  }
  
}

export default App;
