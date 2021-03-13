import React, { Component } from 'react'
import saladPlate from '../resources/Photo-plate.png'

const HomePage = () => {
    return (
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
                            <button class="button is-large is-warning is-outlined">Delivery</button>
                            <button class="ml-6 button is-large is-warning is-outlined">Takeout</button>
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
    )
}

export default HomePage

{/* <div class="columns is-multiline">
                        <div class="m-6 is-size-1 has-text-left is-uppercase">
                            Food in the comfort of your home
                        </div>
                        <div class="column is-four-fifths">
                            <input class=" ml-6 input is-warning" type="text" placeholder="Enter Zipcode..."></input>
                            <div>
                                <button class="mt-3 ml-6 button is-large is-warning is-outlined">Delivery</button>
                                <button class="mt-3 ml-4 button is-large is-warning is-outlined">Takeout</button>
                            </div>
                        </div>
                    </div> */}