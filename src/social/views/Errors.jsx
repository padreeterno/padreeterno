import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./errors.css";
export class E404 extends Component {
  render() {
    return (
      <div className="_w flx ccN">
        <div className="errorContent">
          <strong className="errorMessage">P&aacute;gina no encontrada</strong>
          <p className="errorCode">404</p>
          <Link to="/" className="errorButton errorTextButton">
            Ir a la p&aacute;gina principal
          </Link>
        </div>
      </div>
    );
  }
}
export class E500 extends Component {
  render() {
    return (
      <div className="_w flx ccN">
        <div className="errorContent">
          <strong className="errorMessage">Error interno servidor</strong>
          <p className="errorCode">500</p>
          <Link to="/" className="errorButton errorTextButton">
            Ir a la p&aacute;gina principal
          </Link>
        </div>
      </div>
    );
  }
}
