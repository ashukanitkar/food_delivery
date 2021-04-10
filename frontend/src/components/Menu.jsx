import React from 'react'
import NavBar from './NavBar';
import { auth } from "../firebase";


class Menu extends React.Component {
    state = {
        menuItems: null
    }

    render() {
        async function addItemToCart(menuItem) {
            const idToken = await auth.currentUser.getIdToken()
            let backendUrl = 'https://jeywt0urub.execute-api.us-east-1.amazonaws.com/dev'
            if (window.location.href.includes('localhost')) {
                console.log("detected local env")
                backendUrl = 'http://localhost:4000/dev'
            }
            let path = '/cart'
            const body = JSON.stringify({
                "item_id": menuItem.item_id,
                "item_name": menuItem.item_name,
                "quantity": "1"
            })
            console.log("body for request", body)
            const testSettings = {
                method: 'POST',
                body: JSON.stringify({
                    "item_id": menuItem.item_id,
                    "item_name": menuItem.item_name,
                    "quantity": "1"
                }),
                headers: {
                    Authorization: idToken,
                    "Content-Type": "application/json"
                }
            }
            const testResponse = await fetch(backendUrl+path, testSettings)
            console.log(testResponse.status)
        }
        if (!auth.currentUser) {
        return(<h2>You are not authorized to see this.</h2>)
        }
        return (
        <div>
        <NavBar isSignedIn={true} user={auth.currentUser.displayName} email={auth.currentUser.email}/>
        <div>
            <section class="section white-section">
    
            <h2 class="title">Menu Items</h2>
                <div class = "columns">
                { this.state.menuItems && this.state.menuItems.map(menuItem => {
                    return(
                        <div class="column is-4">
                            <div to="/menu" class="card">
                                <div class="card-content">
                                    <div class="media">
                                    <div class="media-content">
                                    <p class="title">{menuItem.item_name}</p>
                                    <p class="subtitle">Yum</p>
                                    </div>
                                    </div>
            
                                    <div class="content">
                                    <button class="button is-small is-lemon" onClick={() => addItemToCart(menuItem)}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                )}
                </div>
            </section>
            </div>
        </div>
        )
    }

    async componentDidMount() {
        const idToken = await auth.currentUser.getIdToken()
        let backendUrl = 'https://jeywt0urub.execute-api.us-east-1.amazonaws.com/dev'
        if (window.location.href.includes('localhost')) {
            backendUrl = 'http://localhost:4000/dev'
        }
        let path = '/menu'
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
        const menuItems = await response.json()
        console.log("menu items", menuItems)
        this.setState({menuItems: menuItems})
    }
}

export default Menu;

