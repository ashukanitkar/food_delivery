import React, { Component } from 'react'
import './App.sass';

import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import FoodSearch from './components/FoodSearch';
import Checkout from './components/Checkout';
import SignInScreen from './components/SignIn';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UserProvider from './providers/UserProvider';
import Menu from './components/Menu';



class App extends Component {
  
  render() {
    return (
      <main>
        <UserProvider>
          <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/search" component={FoodSearch}/>
              <Route path="/checkout" component={Checkout} />
              <Route path="/signin" component={SignInScreen}/>
              <Route path="/menu" component={Menu}/>
              <Route component={Error} />
          </Switch>
          </UserProvider>
      </main>
    )
  } 
}

export default App