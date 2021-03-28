import React from 'react'
import { useContext } from "react";
import TopRestaurants from './TopRestaurants';
import Posts from './TopCategories';
import CravingSearch from './CravingSearch';
import NavBar from './NavBar';
import { auth, provider } from "../firebase";
import { UserContext } from "../providers/UserProvider";



const FoodSearch = () => {
    // The component's Local state.
    const authInfo = useContext(UserContext);
    console.log("AAAAH", authInfo);
    
    
    return (
        <div>
        <NavBar isSignedIn={true} user="Ashu" email="fdasf"/>
        <CravingSearch/>
        <Posts></Posts>
        <TopRestaurants/> 
        </div>
    )
}

export default FoodSearch;