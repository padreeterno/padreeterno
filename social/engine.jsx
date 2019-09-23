import React, { Component } from 'react';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import fire from "../fire/auth";
import queryString from 'query-string';
import axios from "axios";
//VIEW FISRT RENDER
import TopView from "./views/inicio/topBar";
import Inicio from "./views/inicio";
import ControlViews from "./controlviews";
import CompleteUser from "./successUserRegister";
//RUTAS
// import Rutas from "./routes";
//ERROR 404
// import E404 from "./error/404"
class EngineSocial extends Component {
  render() {
    return (
      <Router>
        <TopView/>
        <Switch>
          <Route exact path="/" component={Inicio}/>
          <Route path="/complete" component={CompleteUser}/>
          <Route path="/:id" component={ControlViews}/>
        </Switch>
      </Router>
    );
  }
}

export default EngineSocial;
