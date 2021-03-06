import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import {connect} from 'react-redux'

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/signIn-signUp/sign-in-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import setCurrentUser from './redux/user/user-actions.js'

class App extends React.Component {

  

  unsubscribeFromAuth = null;

  componentDidMount() {

    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

       await userRef.onSnapshot(snapShot => {
          setCurrentUser({
            
              id: snapShot.id,
              ...snapShot.data()
            
          });

           console.log(this.state);
        });
      }

      setCurrentUser(userAuth);
    });
  }
  // When we close the app it'll try to logout
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Router>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
        </Router>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps) (App);
