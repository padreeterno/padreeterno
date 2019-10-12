//RUTAS SIN INICIAR SESION
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Principal from "./principal";
import {E404} from "./Errors";
//Routes
import SocialRouter from "./social/router";
import NegociosRouter from "./negocios/router";
//URIS
import RegisterBussinessRouter from "./negocios/router_uris"

import LoginNego from "./negocios/login";
//PRINCIPALES
import Negocios from "./negocios/views/main";
import Social from "./social/views/main";
class RouterWeb extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Principal} />
          <Route exact path="/negocios" component={Negocios} />
          <Route exact path="/social" component={Social} />
          <Route path="/negocios/loggin" component={LoginNego} />
          <Route path="/negocios/register/:id" component={RegisterBussinessRouter} />
          <Route exact path="/negocios/:id" component={NegociosRouter} />
          <Route exact path="/social/:id" component={SocialRouter} />
          <Route component={E404} />
        </Switch>
      </Router>
    );
  }
}
export default RouterWeb;
