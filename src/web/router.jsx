//RUTAS SIN INICIAR SESION
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Principal from "./principal";
import {E404} from "./Errors";
//Routes
import SocialRouter from "./social/router";
import NegociosRouter from "./negocios/router";
//URIS
import Personal from "./negocios/uris/personal";
import EmpresaRegister from "./negocios/views/empresa_register";
import Estudiante from "./negocios/uris/estudiante";
import Institucion from "./negocios/uris/institucion";

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
          <Route exact path="/negocios/:id" component={NegociosRouter} />
          <Route exact path="/social/:id" component={SocialRouter} />
          {/**/}
          <Route path="/negocios/register/personal" component={Personal} />
          <Route path="/negocios/register/empresa" component={EmpresaRegister} />
          <Route path="/negocios/register/estudiante" component={Estudiante} />
          <Route path="/negocios/register/institución" component={Institucion} />
          <Route component={E404} />
        </Switch>
      </Router>
    );
  }
}
export default RouterWeb;
