import React, { Component } from 'react';
//URIS
//Components
import TOP from "./topbottom/top";
import BOTTOM from "./topbottom/bottom";
//VIEWS

export default class Rutas extends Component{
  componentDidMount(){
      console.log(this.props)
  }
  render(){
    const { match } = this.props;
    //PRINCIPAL
    switch(match.params.state){
        case "messages" : return <><TOP hash={this.props.hash}/><h1>Mensajes</h1><BOTTOM/></>;
        default: return <><TOP hash={this.props.hash}/><h1>404</h1><BOTTOM/></>;
    }
  }
}
