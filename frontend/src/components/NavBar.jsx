import React from 'react'
import lemon from '../resources/lemon.png'
import firebase from 'firebase';

const NavBar = (props) => {
    const isSignedIn = props.isSignedIn
    if(!isSignedIn) {
    return(
        <nav class="navbar black-underline" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item">
            <img src={lemon} width="30" height="28"></img>
            </a>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <a class="button is-primary is-ashu-cp">
                            <strong>Sign up</strong>
                        </a>
                        <a class="button is-light">
                            Log in
                        </a>
                        <button class="button is-danger">
                            Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    )    
    }
    else {
        return (
        <nav class="navbar black-underline" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item">
            <img src={lemon} width="30" height="28"></img>
            </a>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <a>Welcome {props.user} </a>
                        <a class="button is-light" onClick={() => firebase.auth().signOut()}>
                            Sign Out
                        </a>
                        <button class="button is-danger">
                            Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </nav>
        )
    }

}
export default NavBar;
