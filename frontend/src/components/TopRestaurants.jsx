import React from 'react';


class TopRestaurants extends React.Component {
    state = {
        restaurants: null
    }

    render() {
        return (
            <div>
            <section class="section white-section">
    
            <h2 class="title">Top Restaurants</h2>
                <div class = "columns">
                { this.state.restaurants && this.state.restaurants.map(restaurant => {
                    return(
                        <div class="column is-4">
                            <div class="card">
                                <div class="card-content">
                                    <div class="media">
                                    <div class="media-content">
                                    <p class="title">{restaurant.name}</p>
                                    <p class="subtitle">@johnsmith</p>
                                    </div>
                                    </div>
            
                                    <div class="content">
                                    {restaurant.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                )}
                </div>
            </section>
            </div>
        )
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:4000/dev/restaurants')
        const restaurants = await response.json()
        this.setState({restaurants: restaurants})
    }
}


export default TopRestaurants;