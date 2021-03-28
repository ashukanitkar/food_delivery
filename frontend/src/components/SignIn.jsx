// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Redirect } from 'react-router-dom';
import NavBar from './NavBar'
import { auth, provider } from "../firebase";
import userProvider from '../providers/UserProvider';

 
class SignInScreen extends React.Component {
 
  // The component's Local state.
  state = {
    isSignedIn: false // Local signed-in state.
  };
 
  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      provider
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: (authResult) => {
        this.setState({ isSignedIn: authResult});
        return false;
      }
    }
  };
 
  render() {
    {console.log("User", auth)}
    if (!this.state.isSignedIn) {
      return (
        <div>
        <NavBar isSignedIn={false}/>
        <div class="columns full-length is-full signin-container is-vcentered">
          <div class="column is-half is-offset-one-quarter">
            <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={auth}/>
          </div>
        </div>
        </div>
      );
    }
    return (
      <div>
        <Redirect to="/search" />

      </div>
    );
  }
}
export default SignInScreen