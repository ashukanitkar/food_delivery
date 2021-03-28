import React from 'react'
import lemon from '../resources/lemon.png'
import firebase from 'firebase';
import { Link } from 'react-router-dom'
import { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import {auth} from "../firebase";

const NavBar = (props) => {
    const authInfo = useContext(UserContext);
    if(authInfo == null) {
    return(
        <nav class="navbar black-underline" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <Link to="/" class="navbar-item">
            <img src={lemon} width="30" height="28"></img>
            </Link>

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
                        <Link to="/signin" class="button is-primary is-ashu-cp">
                            <strong>Sign up</strong>
                        </Link>
                        <Link to="/signin" class="button is-light">
                            Log in
                        </Link>
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
        <Link to="/" class="navbar-item">
            <img src={lemon} width="30" height="28"></img>
        </Link>

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
                        <a>Welcome {props.user} {props.email} </a>
                        <Link class="button is-light" onClick={() => firebase.auth().signOut()} to="/" >
                            Sign Out
                        </Link>
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
