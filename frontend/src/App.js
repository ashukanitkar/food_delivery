import React, { Component } from 'react'
import './App.sass';

import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import FoodSearch from './components/FoodSearch';
import Checkout from './components/Checkout';
import SignInScreen from './components/SignIn';

class App extends Component {
  
  render() {
    return (
      <div>
        <HomePage/>
        {/* <FoodSearch/> */}
      {/* <SignInScreen/> */}
      </div>
    )
  }
}

export default App

