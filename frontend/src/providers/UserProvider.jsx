import React, { Component, createContext } from "react";
import { auth } from "../firebase";

export const UserContext = createContext({ user: null });
class UserProvider extends Component {
  state = {
    user: null
  };

  componentDidMount = async () => {
    this.unregisterAuthObserver = auth.onAuthStateChanged(userAuth => {
        console.log("state is changing")
      this.setState({ user: userAuth});
    });
  };


  componentWillUnmount() {
    this.unregisterAuthObserver();
  }
  
  render() {
    return (
      <UserContext.Provider value={this.state.user}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
export default UserProvider;