import React, { Component } from "react";
import fireAuth from "./fire/auth";
import fireDB from "./fire/db";
import Bussiness from "./bussiness/engine";
//IF NOT LOGGED
import Web from "./web/router";
import Social from "./social/engine";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isBussiness : false,
    };
    this.authListener = this.authListener.bind(this);
  }
  authListener() {
    fireAuth.onAuthStateChanged(user => {
      if (user) {
        const database = fireDB.ref("/users/"+ user.uid).child("isBussiness");
        database.once("value",(snapshoot) =>{
          if(snapshoot.val()){
            this.setState({
              isBussiness : snapshoot.val()
            });
          }
        });
        this.setState({ user });
        localStorage.setItem("user", user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem("user");
      }
    });
  }
  UNSAFE_componentWillMount() {
    this.authListener();
  }
  render() {
    if(this.state.user){
      if(this.state.isBussiness){
        return <Bussiness/>
      }
      return <Social />
    }else{
      return <Web/>
    }
  }
}
export default Main;
