import React,{ Component } from "react";
import fire from "../../../fire/auth";
import db from "../../../fire/db";
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
  sendData(data){
    console.log(data)
    fire.signInWithEmailAndPassword(data.email,data.password).then((u)=>{
      return window.location.assign("/");
    }).catch((auth)=>{
      switch (auth.code) {
        case "auth/user-not-found":{
          return this.setState({ message : "Correo no registrado"});
        }
        case "auth/wrong-password":{
          return this.setState({ message : "Contraseña Incorrecta"});
        }
        default : return this.setState({ message : "Error no definido"});
      }
    });

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
  sendData(data){
    var guest = guestId();
    if(!data.isMatchedPassword){
      return this.setState({
        message : "Confirme las contraseñas"
      });
    }
    fire.createUserWithEmailAndPassword(data.email, data.password).then((e)=>{
      fire.currentUser.updateProfile({
        displayName : guest
      }).then(()=>{
        db.ref(`users/${e.user.uid}`).set({
            uid: e.user.uid,
            email : e.user.email,
            creado : Date.now(),
            name : guest,
            username : guest,
        }).then(() => {
          return window.location.assign("/complete?id="+e.user.uid+"&time="+Date.now());
        }).catch(()=>{
          return this.setState({ message : "Verifica tu conexion a internet"});
        });
      });
    }).catch((e)=>{
      switch (e.code) {
        case "auth/email-already-in-use":{
          this.email.value = "";
          this.password.value = "";
          this.vpassword.value = "";
          return this.setState({ message : "Usuario ya registrado"});
        }
        default : {
          return this.setState({ message : "Problema no definido"});
        }
      }
    });
  }
  render(){
    return(
      <UserRegister staginData={(data)=> this.sendData(data)}>
        { this.state.message && <p className="PopUpRLMainView">{this.state.message}</p>}
      </UserRegister>
    );
  }
}