import React from 'react'
import TopRestaurants from './TopRestaurants';
import Posts from './TopCategories';
import CravingSearch from './CravingSearch';

const FoodSearch = () => {
    return (
        <div>
            {console.log("fdaf")}
        <CravingSearch/>
        <Posts></Posts>
        <TopRestaurants/> 
        </div>
    )
}

export default FoodSearch;