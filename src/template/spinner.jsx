import React, { Component } from "react";
export default class Spinner extends Component {
  render = () => (
    <div className="spinner-grow" style={{ width: "3rem", height: "3rem" }} role="status">
      <span className="sr-only">Cargando...</span>
    </div>
  );
}