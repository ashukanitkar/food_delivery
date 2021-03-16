import React, { Component } from 'react'
import './App.sass';

import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import FoodSearch from './components/FoodSearch';
import Checkout from './components/Checkout';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        {/* <HomePage/> */}
        {/* <FoodSearch/> */}
        <Checkout/>
      </div>
    )
  }
}

export default App
