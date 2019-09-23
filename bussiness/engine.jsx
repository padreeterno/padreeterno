import React, { Component } from 'react';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
//VIEW FISRT RENDER
import Principal from "./views/principal/principal";
//RUTAS
import Rutas from "./routes";
//ERROR 404
import E404 from "./error/404"
class Engine extends Component {
  render() {
    return (
    	<Router>
        <Switch>
          <Route exact path="/" render={(props) => <Principal hash={ this.props.hash } {...props}/>} />
          <Route path="/:state" render={(props) => <Rutas hash={this.props.hash} {...props}/>} exact/>
          <Route path="/:state/:dir" component={(props) => <Rutas hash={ this.props.hash } {...props}/>} exact/>
          <Route component={ E404 }/>
        </Switch>
      </Router>
    );
  }
}

export default Engine;
