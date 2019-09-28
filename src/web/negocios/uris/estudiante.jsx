import React, { Component } from "react";
import "./index.css";
import axios from "axios";

import {cookieCreate} from "../../helps";
let i = 0;
export default class Estudiante extends Component {
  constructor(props){
    super(props);
    this.state = ({
      email : false,
      password : false,
      cedula : ""
    })
    this.registra = this.registra.bind(this);
    this.Username = this.Username.bind(this);
    this.tecla = this.tecla.bind(this);
    this.civerifi = this.civerifi.bind(this);

    this.username = React.createRef();
    this.plan = React.createRef();
    this.correo = React.createRef();
    this.password = React.createRef();
    this.cpassword = React.createRef();
    this.fullname = React.createRef();
    this.ci = React.createRef();
    this.academico = React.createRef();
  }
  civerifi(e){
    const { value, validity } = e.target;
    if (validity.valid) {
      return this.setState({
        cedula: value
      });
    }
  }
  registra(e) {
    e.preventDefault();
    if(!this.cpassword.value === this.password.value){
      return alert("Confirmar contraseña");
    }
    var username = this.username.value;
    var correo = this.correo.value;
    var password = this.password.value;
    var fullname = this.fullname.value;
    var ci = this.ci.value;
    var academico = this.academico.value;
    var plan = this.plan.value;
    var cpassword = this.cpassword.value;
    if(username.length < 1 || correo.length < 1 ||password.length < 1 || fullname.length < 1 || ci.length < 1 || academico.length < 1){
      return alert("Rellenar todos los campos");
    }else if (this.state.email) {
        return alert("Nombre de usuario: "+username + " ya existe");
    }
    axios.post("http://127.0.0.1:8000/api/negocios/registro/estudiante",{username,correo,password,cpassword,fullname,ci,academico,plan},{headers : { 'Content-Type' : 'application/json;charset=utf-8' }})
    .then(e => {
      var response = e.data;
      if(response.success){
        cookieCreate({
          id : "_hash",response : response.success
        },Date.now() + 60 * 60 * 4000,"/");
        return window.location.replace("/")
      }
      alert(response.error)
    }).catch(e=>{
      if(e.status === 0){
        alert("No tiene conexion a internet")
      }
    })
  }
  tecla({target}){
    if(target.value === this.password.value){
      console.log("vErdad")
      return this.setState({
        password : true
      });
    }
    return this.setState({
      password : false
    })
  }
  Username({target}){
    axios.get("http://127.0.0.1:8000/api/negocios/username?id="+target.value)
    .then(res => {
      var a = res.data;
      if(a.error){
        return this.setState({
          email : false
        });
      }
      if(a.success){
        return this.setState({
          email : true
        })
      }
    }).catch(function(e){
      var s = i++;
      if(s < 1){
        if(e.status === 0){
          alert("No tiene conexion a internet")
        }
      }
    })
  }
  render() {
    const { password ,email} = this.state;
    return (
      <div className="_w flx ccN" style={{ position: "absolute", height: "100vh" }} >
        <div className="rg98J">
          <form className="eM561 alct" onSubmit={this.registra}>
            <div className="flx one">
              <input ref={e => this.plan = e} type="hidden" name="plan" value="estudiante" />
              {/* Datos usuario*/}
              <div className="two">
                <div className="flx" style={{justifyContent: "space-evenly"}}>
                  <p style={{ color: "white", fontWeight: 700 }}>
                    Datos de usuario
                  </p>
                  {this.state.password ? <ion-icon style={{color : "var(--trust-)"}} name="ios-checkmark-circle"></ion-icon> : ""}
                </div>
                <div>
                  <input style={email ? {color : "red"}:{color : "var(--trust-)"}} onChange={e => this.Username(e)} ref={e => this.username = e} name="username" placeholder="nuevo usuario" type="text" autoComplete="off"/>
                </div>
                <div>
                  <input ref={e => this.correo = e} name="correo" placeholder="correo" type="email" autoComplete="off"/>
                </div>
                <div>
                  <input style={password ? {color : "var(--trust-)"} : {color : "black"}} ref={e => this.password = e} name="password" placeholder="nueva contrase&ntilde;a" type="password" autoComplete="off" autoCorrect="true" />
                </div>
                <div>
                  <input style={password ? {color : "var(--trust-)"} : {color : "black"}} onChange={e => this.tecla(e)} ref={e => this.cpassword = e} name="cpassword" placeholder="confirme contrase&ntilde;a" type="password" autoComplete="off" autoCorrect="true" />
                </div>
              </div>
              {/* Datos personales*/}
              <div className="two">
                <div>
                  <p style={{ color: "white", fontWeight: 700 }}>
                    Datos Personales
                  </p>
                </div>
                <div>
                  <input ref={e => this.fullname = e} name="fullname" placeholder="nombre y apellido" type="text" autoComplete="off" />
                </div>
                <div>
                  <input pattern="[0-9]*" onChange={this.civerifi} value={this.state.cedula}  ref={e => this.ci = e} name="ci" placeholder="numero de identificaci&oacute;n" type="text" autoComplete="off" />
                </div>
              </div>
            </div>
            <div className="flx one">
              {/* Datos academicos*/}
              <div className="two">
                <div>
                  <p
                    style={{
                      color: "white",
                      fontWeight: 700,
                      padding: "10px 0px"
                    }}
                  >
                    Datos Acad&eacute;micos
                  </p>
                </div>
                <div className="custom-select">
                  <select ref={e => this.academico = e} className="eM566" autoComplete="off" >
                    <option value="No especificado">No especificado</option>
                    <option value="primario">Primario</option>
                    <option value="medio">Medio</option>
                    <option value="superior">Superior</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="eM5613">
              <button className="eM5677" type="submit">
                comenzar
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
