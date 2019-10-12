import React, { Component } from 'react';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
//VIEW FISRT RENDER
import Header from "./header/header";
import interface_principal from "./views/interface_principal";
import views_controller from "./controlviews";
import complete_usewide_absoluteegister from "./views/successUserRegister";
//RUTAS
// import Rutas from "./routes";
//ERROR 404
// import E404 from "./error/404"
class EngineSocial extends Component {
  render() {
    return (
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={interface_principal}/>
          <Route path="/complete" component={complete_usewide_absoluteegister}/>
          <Route path="/:id" component={views_controller}/>
        </Switch>
      </Router>
    );
  }
}

export default EngineSocial;
