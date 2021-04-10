import React from 'react';
import { auth } from '../firebase'
import { Link } from 'react-router-dom'



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
                            <Link to="/menu" class="card">
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
                            </Link>
                        </div>
                    )}
                )}
                </div>
            </section>
            </div>
        )
    }

    async componentDidMount() {
    const idToken = await auth.currentUser.getIdToken()
    let backendUrl = 'https://jeywt0urub.execute-api.us-east-1.amazonaws.com/dev'
    if (window.location.href.includes('localhost')) {
        backendUrl = 'http://localhost:4000/dev'
    }
    let path = '/restaurants'
    const settings = {
        method: 'GET',
        headers: {
            Authorization: idToken,
        }
    };
    const response = await fetch(backendUrl+path, settings)
    if (response.status === 401) {
      return console.log('unauthorized')
    }
    const restaurants = await response.json()
    this.setState({restaurants: restaurants.body})
    }
}


export default TopRestaurants;