import React,{ Component } from "react";
import fire from "../../../fire/auth";
import { loginuser, registeruser } from "./modules/formsocial";
import database from "../../../fire/db";
import { guestId } from "../../../id";
import UserLogin from "./components/userlogin";
import UserRegister from "./components/userregister";
import "./index.css";

export class Loggin extends Component{
  constructor(props){
    super(props);
    this.state = {
      message : "",
    }
    this.sendData = this.sendData.bind(this);
  }
  async sendData(data){
    console.log(data);
    const email = data.email;
    const password = data.password;
    const isLogged = await loginuser({fire,email,password});
    if(isLogged.isSending === 0){
      return this.setState({
        message : isLogged.message,
      });
    }
    return window.location.assign("/");
  }
  render(){
    return(
      <UserLogin staginData={(data)=> this.sendData(data)}>
      { this.state.message && <p style={{position: "absolute",left: 0,top: 0,color: "white",padding: "5px 10px",fontSize: "13px",background: "rgb(142, 156, 255)",borderRadius: "10px",fontWeight: 700}}>{this.state.message}</p>}
    </UserLogin>
    );
  }
}
export class Registro extends Component{
  constructor(props){
    super(props);
    this.state = {
      message : null,
      vpas : null,
      pushPasswordRequeriments: null,
    };
  };
  async sendData(data){
    var id = guestId();
    const email = data.email;
    const password = data.password;
    if(!data.isMatchedPassword){
      return this.setState({
        message : "Confirme las contraseñas"
      });
    }
    const stayLogged = await registeruser({fire,email,password,database,id});
    if(stayLogged.isSending === 0){
      if(stayLogged.code){
        console.log(stayLogged.code);
      }
      return this.setState({
        message : stayLogged.message
      })
    }
    return window.location.assign("/complete?id="+stayLogged.message+"&time="+Date.now());
  }
  render(){
    return(
      <UserRegister staginData={(data)=> this.sendData(data)}>
        { this.state.message && <p className="PopUpRLMainView">{this.state.message}</p>}
      </UserRegister>
    );
  }
}