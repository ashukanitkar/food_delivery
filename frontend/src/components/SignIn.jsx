// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import FoodSearch from './FoodSearch';
import NavBar from './NavBar'

 
// Configure Firebase.
var firebaseConfig = {
  apiKey: "AIzaSyBB8YD0iFUH2gKL_Bh-4XyWwfCSL2dbdXQ",
  authDomain: "ak-food-delivery.firebaseapp.com",
  projectId: "ak-food-delivery",
  storageBucket: "ak-food-delivery.appspot.com",
  messagingSenderId: "122580273394",
  appId: "1:122580273394:web:16f8cd1428de310a7da86b"
};
firebase.initializeApp(firebaseConfig);
 
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
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false
    }
  };
 
  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
        (user) => this.setState({isSignedIn: !!user})
    );
  }
  
  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }
 
  render() {
    if (!this.state.isSignedIn) {
      return (
        <div>
        <NavBar isSignedIn={false}/>
        <div class="columns full-length is-full signin-container is-vcentered">
          <div class="column is-half is-offset-one-quarter">
            <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
          </div>
        </div>
        </div>
      );
    }
    return (
      <div>
        <NavBar isSignedIn={true} user={firebase.auth().currentUser.displayName} email={firebase.auth().currentUser.email}/>
        <FoodSearch/>
      </div>
    );
  }
}
export default SignInScreen