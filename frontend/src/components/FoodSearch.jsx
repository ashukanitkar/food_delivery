import React from 'react'
import { useContext } from "react";
import TopRestaurants from './TopRestaurants';
import Posts from './TopCategories';
import CravingSearch from './CravingSearch';
import NavBar from './NavBar';
import { auth } from "../firebase";


class FoodSearch extends React.Component {

    render() {
        if (!auth.currentUser) {
        return(<h2>You are not authorized to see this.</h2>)
        }
        return (
        <div>
        <NavBar isSignedIn={true} user={auth.currentUser.displayName} email={auth.currentUser.email}/>
        <CravingSearch/>
        <Posts></Posts>
        <TopRestaurants/> 
        </div>
        )
    }
}

export default FoodSearch;