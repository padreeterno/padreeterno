import React, { Component } from "react";
import fireAuth from "./fire/auth";
import fireDB from "./fire/db";
import Bussiness from "./bussiness/engine";
//IF NOT LOGGED
import templates from './template';
import Web from "./web/router";
import Social from "./social/engine";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isBussiness: false,
      connectionState: ""
    };
    this.authListener = this.authListener.bind(this);
  }
  authListener() {
    fireAuth.onAuthStateChanged(user => {
      if (user) {
        const database = fireDB.ref("/users/" + user.uid + "/userdata").child("isBussiness");
        database.once("value", (snapshoot) => {
          if (snapshoot.val()) {
            this.setState({
              connectionState: "done",
              isBussiness: snapshoot.val()
            });
          }
        });
        this.setState({ user });
        localStorage.setItem("user", user.uid);
      } else {
        this.setState({ user: null, connectionState: "done" });
        localStorage.removeItem("user");
      }
    });
  }
  UNSAFE_componentWillMount() {
    this.authListener();
  }
  render() {
    const { user, isBussiness, connectionState } = this.state;
    if (connectionState === "done") {
      if (user) {
        if (isBussiness) {
          return <Bussiness />
        }
        return <Social />
      }
      return <Web />
    }
    return <div className="w-100 h-100 d-flex position-fixed justify-content-center align-items-center">
      <templates.spinner />
    </div>;
  }
}
export default Main;
