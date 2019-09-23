import React, { Component } from "react";
import fireAuth from "./fire/auth";
//IF NOT LOGGED
import Web from "./web/router.js";
import Social from "./social/engine";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this.authListener = this.authListener.bind(this);
  }
  authListener() {
    fireAuth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
        localStorage.setItem("user", user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem("user");
      }
    });
  }
  componentWillMount() {
    this.authListener();
  }
  render() {
    if(this.state.user){
      return <Social />
    }else{
      return <Web/>
    }
  }
}
export default Main;
