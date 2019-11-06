import React, { Component } from 'react';
import fire from '../../fire/auth';
import firedb from '../../fire/db';
import { Link } from "react-router-dom";
import navHead from '../router.asset'

import "./index.css";
// import { Ajustes, Notifies } from "../PopUps/popups";

class TOP extends Component {
  componentDidMount() {
    const responseDatabase = firedb.ref("users/" + fire.currentUser.uid + "/userdata");
    responseDatabase.once("value", (profile) => {
      if (profile.val()) {
        this.setState({
          plan: profile.val().plan,
          username: profile.val().username
        })
      }
    });
    this.setState({
      emailVerified: fire.currentUser.emailVerified
    });
  }
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      plan: "",
      emailVerified: true
    }
    this.sessionEnd = this.sessionEnd.bind(this);
  }
  sessionEnd = async () => {
    try {
      await fire.signOut();
    } finally{
      return window.location.replace("/negocios");
    }
  }
  render() {
    const { plan } =this.state;
    if(plan){
      return (
        <div className="">
          <div style={appBar} className="d-flex py-1 container-fluid align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <img className="img-fluid rounded" src="/favi.jpg" width={46} height={46} alt="Favicon" />
              <h3 className="ml-3 mb-0 text-white">Padre Eterno</h3>
            </div>
            <p className="mb-0" style={{ color: "white", fontSize: "1.2rem" }}>{this.state.username}</p>
            <button className="btn btn-outline-light" onClick={this.sessionEnd}>
            Cerrar sessi&oacute;n
            </button>
          </div>
          <div className="container-fluid d-flex justify-content-center">
            <div className="shadow-sm rounded-bottom d-flex align-items-center" style={appBar}>
              <ul className="m-0 row navbar-nav bd-navbar-nav flex-row">
                {navHead[plan].map(navBuilder)}
              </ul>
            </div>
          </div>
        </div>
      );
    }
    return <div></div>;
  }
}
const navBuilder = (item,key) =>{
  return <li key={key} className="col nav-item">
                <Link className="nav-link link-gonzu-p btn-outline-light bg-transparent" to={item.path}>
                  {item.tabName}
                </Link>
              </li>;
}
const appBar = {
  background: "blue"
};
export default TOP;
