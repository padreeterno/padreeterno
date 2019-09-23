import React,{ Component } from "react";
import fire from "../../../fire/auth";
import db from "../../../fire/db";
import { guestId } from "../../../id";
import "./index.css";

export class Loggin extends Component{
  constructor(props){
    super(props);
    this.state = {
      message : "",

      email : "",
      password : ""
    }
    this.ingreso = this.ingreso.bind(this);

    this.email = React.createRef();
    this.password = React.createRef();
  }
  ingreso(e){
    e.preventDefault();
    var email = this.email.value;
    var password = this.password.value
    console.log(email,password)
    fire.signInWithEmailAndPassword(email,password).then((u)=>{
      console.log(u)
    }).catch((e)=>{
      switch (e.code) {
        case "auth/user-not-found":{
          return this.setState({ message : "Correo no registrado"});
        }
        case "auth/wrong-password":{
          return this.setState({ message : "Contraseña Incorrecta"});
        }
      }
      console.log(e)
    });
  }
  render(){
    return(
      <form style={{position : "relative"}} className="alct _h flx ccN" onSubmit={this.ingreso}>
        <div>
          <p style={{paddingBottom: "50px",fontWeight: 700,fontSize: "25px"}}>Iniciar Sesi&oacute;n</p>
          <div>
            <div style={{justifyContent: "center"}} className="flx">
              <div className="flx">
                <p style={{padding: "0px 10px",fontWeight : 700}}>Email</p>
              </div>
            </div>
            <input ref={(e)=> this.email = e} type="email" placeholder="correo"/>
          </div>
          <div>
            <p style={{ fontWeight : 700 }}>contrase&ntilde;a</p>
            <input ref={(e)=> this.password = e} type="password" placeholder="contrase&ntilde;a"/>
          </div>
          <div>
            <button style={{background: "var(--frm-sbt-)",color: "white"}} type="submit">Ingresar</button>
          </div>
        </div>
        { this.state.message && <p style={{position: "absolute",left: 0,top: 0,color: "white",padding: "5px 10px",fontSize: "13px",background: "rgb(142, 156, 255)",borderRadius: "10px",fontWeight: 700}}>{this.state.message}</p>}
      </form>
    )
  }
}
export class Registro extends Component{
  constructor(props){
    super(props);
    this.state = {
      message : "",
      vpas : null
    };
    this.registro = this.registro.bind(this);
    this.verifyPassword = this.verifyPassword.bind(this);

    this.email = React.createRef();
    this.password = React.createRef();
    this.vpassword = React.createRef();
  }
  registro(e){
    e.preventDefault();
    var email = this.email.value;
    var password = this.password.value;
    var guest = guestId();
    if(!this.state.vpas){
      return this.setState({
        message : "Confirme las contraseñas"
      });
    }
    fire.createUserWithEmailAndPassword(email, password).then((e)=>{
      fire.currentUser.updateProfile({
        displayName : guest
      }).then(()=>{
        db.ref(`users/${e.user.uid}`).set({
          uid: e.user.uid,
          email : e.user.email,
          creado : Date.now(),
          name : guest
        }).then(() => {
          return window.location.replace("/complete?id="+e.user.uid+"&time="+Date.now());
        }).catch((error)=>{
          console.log(`error ${error}`)
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
  verifyPassword(){
    var password = this.password.value;
    var verifipassword = this.vpassword.value;

    if(password == verifipassword){
      return this.setState({
        vpas : true
      })
    }
    return this.setState({
      vpas : false
    })
  }
  render(){
    return(
      <form style={{position : "relative"}} className="alct _h flx ccN" onSubmit={this.registro}>
        <div>
          <p style={{paddingBottom: "50px",fontWeight: 700,fontSize: "25px"}}>Registro de Usuario</p>
          <div className="flx ccN">
            <div>
              <p style={{ fontWeight : 700 }}>Correo Electr&oacute;nico</p>
              <input type="email" ref={e => this.email = e} placeholder="email"/>
            </div>
          </div>

          <div className="flx">
            <div>
              <p style={{ fontWeight : 700 }}>Contrase&ntilde;a</p>
              <input type="password" style={this.state.vpas ? { color : "rgb(142, 156, 255)"} : {}} ref={e => this.password = e} placeholder="contraseña"/>
            </div>
            <div>
              <p style={{ fontWeight : 700 }}>confirmar contrase&ntilde;a</p>
              <input type="password" style={ this.state.vpas ? { color : "rgb(142, 156, 255)"} : {color : "red"}} ref={e => this.vpassword = e} onChange={this.verifyPassword} placeholder="verificar contrase&ntilde;a"/>
            </div>
          </div>
          <div>
            <button style={{background: "var(--frm-sbt-)",color: "white"}} type="submit">Continuar</button>
          </div>
        </div>
        { this.state.message && <p className="PopUpRLMainView">{this.state.message}</p>}
      </form>
    )
  }
}
