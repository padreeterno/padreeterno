import React, { Component } from 'react';
//URIS
//Components
import TOP from "./topbottom/top";
import BOTTOM from "./topbottom/bottom";
//VIEWS

export default class Rutas extends Component {
  render() {
    const { match } = this.props;
    switch (match.params.state) {
      case "messages": return <><TOP hash={this.props.hash} /><h1>Mensajes</h1><BOTTOM /></>;
      default: return <><TOP hash={this.props.hash} /><h1>404</h1><BOTTOM /></>;
    }
  }
}
