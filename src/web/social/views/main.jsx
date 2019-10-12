import React, { Component } from "react";
import BeenHere from "../../config/icon.svg";
import { Loggin,Registro } from "./formsSocial";
import "./index.css";

export default class Inicio extends Component {
  constructor(props){
    super(props);
    this.state = {
      viewChanged : true
    }
    this.cambiar = this.cambiar.bind(this);
  }
  cambiar(){
    // Change because this is asynchronous
    this.setState((prevState) => {
      return { viewChanged: !prevState.viewChanged};
  });
  }
  render() {
    const { viewChanged } = this.state;
    return (
      <div style={{left: 0,display: "inline-grid",gridTemplateColumns: "45% 55%"}} className="wide_absolute">
        {/**LEFT*/}
        <div style={{background: "rgb(142, 156, 255)"}} className="_w _h flx ccN">
          <div style={{ display : "block", textAlign : "center"}}>
            <img style={{color : "white",filter : "invert(1)"}} width="120px" height="120px" src={BeenHere} alt="card_id" />
            <div>
              { viewChanged && <button style={{background: "rgb(43, 150, 226)",color: "white",boxShadow: "1px 1px 10px 5px rgba(0, 0, 0, 0.11)"}} onClick={this.cambiar}>Soy nuevo</button> }
              { !viewChanged && <button style={{background: "rgb(43, 150, 226)",color: "white",boxShadow: "1px 1px 10px 5px rgba(0, 0, 0, 0.11)"}} onClick={this.cambiar}>Ya tengo cuenta</button>}
            </div>
          </div>
        </div>
        {/**RIGHT*/}
        <div style={{ padding : "20px 10px",background : "white"}} className="_w _h">
          { viewChanged ? <Loggin/> : <Registro/> }
        </div>
      </div>
    );
  }
}
