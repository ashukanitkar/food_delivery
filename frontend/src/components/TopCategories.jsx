import React from 'react';
import { auth } from '../firebase';
import CartSummary from './CartSummary';
const requestImageFile = require.context('../resources', true, /.png$/);

const TopCategories = ({title, imageName}) => {
    return (
        <div className="card__wrapper column is-1">
        <div className="card lemon-outline">
            <div className="card-image">
                <div className="columns is-centered">
                <div className="column is-8">
                    <figure className="image is-2by2">
                        <img src={requestImageFile(`./${imageName}.png`).default} alt={title}/>
                    </figure>
                </div>
                </div>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <div class="columns is-centered">
                        <div class="column">
                            <p className="is-size-6">{title}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

class Posts extends React.Component {
    state = {
        categories: null
    }

    render() {
        return (
            <div>
            <section class="section white-section">
            <h2 class="title">Top Categories</h2><br/>
            <div className="columns is-multiline is-centered">
            {
                this.state.categories && this.state.categories.map(category => {
                    return (
                        <TopCategories title={category.cat} imageName={category.image}/>
                    )
                })
            }
            </div>
            </section>
            </div>
        )
    }

    async componentDidMount() {
        const idToken = await auth.currentUser.getIdToken()
        let backendUrl = 'https://jeywt0urub.execute-api.us-east-1.amazonaws.com/dev'
        if (window.location.href.includes('localhost')) {
            console.log("detected local env")
            backendUrl = 'http://localhost:4000/dev'
        }
        let path = '/categories'
        const settings = {
            method: 'GET',
            headers: {
                Authorization: idToken,
            }
        };
        backendUrl = backendUrl + path
        console.log("url", backendUrl)
        const response = await fetch(backendUrl, settings)
        if (response.status === 401) {
        return console.log('unauthorized')
        }
        const categories = await response.json()
        this.setState({categories: categories.body})
    }
}


export default Posts;