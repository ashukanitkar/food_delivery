import React, { Component } from 'react'
import saladPlate from '../resources/Photo-plate.png'
import NavBar from './NavBar'

const HomePage = () => {
    return (
        <div>
        <NavBar/>
        <div class="is-white">
        <div class="columns">
            <div class="column is-half">
                <div class="columns">
                    <div class="column is-1"/>
                    <div class="columns is-multiline">
                    <section class="section is-small">
                        <div class="column is-8 is-size-1 mt-6">
                            FOOD IN THE COMFORT OF YOUR HOME
                        </div>
                        <div class="column is-3"/>
                        <div class="column is-6">
                            <input class="input is-warning" type="text" placeholder="Enter Zipcode..."/>
                        </div>
                        <div class="column is-5"/>
                        <div class="column is-11">
                            <button class="button is-large is-lemon is-outlined">Delivery</button>
                            <button class="ml-6 button is-large is-lemon is-outlined">Takeout</button>
                        </div>
                    </section>
                    </div>
                </div>
            </div>
            
            <div class="column">
                <figure class="image is-16by16">
                    <img src={saladPlate}></img>
                </figure>
            </div>
        </div>
        </div>
        </div>
    )
}

export default HomePage
