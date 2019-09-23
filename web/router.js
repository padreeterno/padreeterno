//RUTAS SIN INICIAR SESION
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import queryString from "query-string";

import Principal from "./principal";
import {E404} from "./Errors";
//Routes
import SocialRouter from "./social/router";
import NegociosRouter from "./negocios/router";
//URIS
import Personal from "./negocios/uris/personal";
import Empresa from "./negocios/uris/empresa";
import Estudiante from "./negocios/uris/estudiante";
import Institucion from "./negocios/uris/institucion";

import LoginNego from "./negocios/login";
//PRINCIPALES
import Negocios from "./negocios/views/main";
import Social from "./social/views/main";
class App extends Component {
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
          <Route path="/reg/negocios/personal" component={Personal} />
          <Route path="/reg/negocios/empresa" component={Empresa} />
          <Route path="/reg/negocios/estudiante" component={Estudiante} />
          <Route path="/reg/negocios/institución" component={Institucion} />
          <Route path="/test/:id" component={Child} />
          <Route component={E404} />
        </Switch>
      </Router>
    );
  }
}

class Child extends Component {
  componentDidMount() {
    console.log(queryString.parse(this.props.location.search));
  }
  render() {
    return (
      <div>
        <h3>OG: {this.props.match.params.id}</h3>
        <h3>QUERY: {this.props.location.search}</h3>
      </div>
    );
  }
}

/*
function ParamsDemo({ location }) {
  let params = new URLSearchParams(location.search);

  return (
    <div>
      <p>
        React Router does not have any opinions about how your parse URL query
        strings. Some applications use simple key=value query strings, but
        others embed arrays and objects in the query string. So it's up to you
        to parse the search string yourself.
      </p>
      <p>
        In modern browsers that support{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/API/URL">
          the URL API
        </a>
        , you can instantiate a <code>URLSearchParams</code> object from{" "}
        <code>location.search</code> and use that.
      </p>
      <p>
        In{" "}
        <a href="https://caniuse.com/#feat=url">
          browsers that do not support the URL API (read: IE)
        </a>{" "}
        you can use a 3rd party library such as{" "}
        <a href="https://github.com/sindresorhus/query-string">query-string</a>.
      </p>
      <div>
        <h2>Accounts</h2>
        <ul>
          <li>
            <Link to={{ pathname: "/account", search: "?name=netflix" }}>
              Netflix
            </Link>
          </li>
          <li>
            <Link to={{ pathname: "/account", search: "?name=zillow-group" }}>
              Zillow Group
            </Link>
          </li>
          <li>
            <Link to={{ pathname: "/account", search: "?name=yahoo" }}>
              Yahoo
            </Link>
          </li>
          <li>
            <Link to={{ pathname: "/account", search: "?name=modus-create" }}>
              Modus Create
            </Link>
          </li>
        </ul>

        <Child name={params.get("name")} />
      </div>
    </div>
  );
}

function Child({ name }) {
  return (
    <div>
      {name ? (
        <h3>
          The <code>name</code> in the query string is "{name}"
        </h3>
      ) : (
        <h3>There is no name in the query string</h3>
      )}
    </div>
  );
}

function ParamsExample() {
  return (
    <Router>
      <Route component={ParamsDemo} />
    </Router>
  );
}








*/

export default App;
