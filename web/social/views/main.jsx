import React, { Component } from "react";
import "./index.css";
import BeenHere from "./icon.svg";
import { Loggin,Registro } from "./xtr";

export default class Inicio extends Component {
  constructor(props){
    super(props);
    this.state = {
      estado : true
    }

    this.cambiar = this.cambiar.bind(this);
  }
  cambiar(){
    this.setState({
      estado : !this.state.estado
    });
  }
  render() {
    const { estado } = this.state;
    return (
      <div style={{left: 0,display: "inline-grid",gridTemplateColumns: "45% 55%"}} className="R_r">
        {/**LEFT*/}
        <div style={{background: "rgb(142, 156, 255)"}} className="_w _h flx ccN">
          <div style={{ display : "block", textAlign : "center"}}>
            <div>
              <BeenHere style={{color : "white"}} width="120px" height="120px"/>
            </div>
            <div>
              { estado ? <button style={{background: "rgb(43, 150, 226)",color: "white",boxShadow: "1px 1px 10px 5px rgba(0, 0, 0, 0.11)"}} onClick={this.cambiar}>Soy nuevo</button> : <button style={{background: "rgb(43, 150, 226)",color: "white",boxShadow: "1px 1px 10px 5px rgba(0, 0, 0, 0.11)"}} onClick={this.cambiar}>Ya tengo cuenta</button>}
            </div>
          </div>
        </div>
        {/**RIGHT*/}
        <div style={{ padding : "20px 10px",background : "white"}} className="_w _h">
          { estado ? <Loggin/> : <Registro/> }
        </div>
      </div>
    );
  }
}