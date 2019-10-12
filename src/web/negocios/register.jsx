import fire from "../../fire/auth";
import database from "../../fire/db";
import registercheckout from "../modules/register_user";
import { shortId } from "../../id";
import React, { Component } from "react";
import ci_validator from "./views/modules/ci";
import islengthvalid from "validator/lib/isLength";
import isEmail from "validator/lib/isEmail";
import password_validator from "../modules/password_validator";
import "./index.css";

export default class Empresa extends Component {
  constructor(props){
    super(props);
    this.state = ({
      isvalidpwd : false,
      isvalidci : false,
      isvalidciMessage : "",
      isvalidCorreo : false,
      isvalidpwdMessage : [],
      cedula : "",
      message_error : null,
    })
    this.registra = this.registra.bind(this);
    this.validationPasword = this.validationPasword.bind(this);
    this.validationCi = this.validationCi.bind(this);
    this.validationEmail = this.validationEmail.bind(this);

    this.username = React.createRef();
    this.plan = React.createRef();
    this.correo = React.createRef();
    this.password = React.createRef();
    this.cpassword = React.createRef();
    this.fullname = React.createRef();
    this.academico = React.createRef();
  }
  validationCi({target}){
    const { value, validity } = target;
    if(target.value === ""){
      return this.setState({
        cedula: target.value,
        isvalidci : false,
      });
    }
    if (validity.valid) {
      if(target.value === ""){
        return this.setState({
          cedula: target.value
        });
      }
      var civalue = ci_validator(value);
      if(!civalue.message){
        return this.setState({
          cedula: civalue.value,
          isvalidci : true,
          isvalidciMessage : "",
        });
      }
      return this.setState({
        cedula: civalue.value,
        isvalidci : false,
        isvalidciMessage : civalue.message,
      });
    }
  }
  async registra(e){
    e.preventDefault();
    if(!this.cpassword.value === this.password.value){
      return this.setState({
        message_error : "Confirmar contraseña"
      });
    }
    var id = shortId();
    var username = this.username.value || false;
    var correo = this.correo.value || false;
    var password = this.password.value || false;
    var fullname = this.fullname.value || false;
    //var ci = this.state.cedula || false;
    //var academico = this.academico.value || false;
    console.log(username.toString());
    const username_validator = islengthvalid(username.toString(),{min : 6,max : 15});
    const fullname_validator = islengthvalid(fullname.toString(),{min : 6,max : 25});
    const userdata = { 
      isBussiness : true,
      plan : this.props.plan,
      origin : "negocios",
      email : correo, 
      creado : Date.now(),
      name : fullname,
      username : username + id,
    }
    if(username_validator || fullname_validator){
      //CODE HERE REGISTER  |||
      const stayLogged = await registercheckout({
        fireauth : fire,
        email : correo,
        password,
        firedatabase : database,
        userdata
      });
      if(stayLogged.isSending === 0){
        if(stayLogged.code){
          console.log(stayLogged.code);
        }
        return this.setState({
          message : stayLogged.message
        })
      }
      if(stayLogged.isSending === 1){
        return window.location.assign("/");
      }
    }
    return this.setState({
      message_error : "Completa los campos restantes."
    });
  }
  validationEmail(){
    const isEmailvalid = isEmail(this.correo.value);
    console.log("email typed => ",isEmailvalid);
    if(isEmailvalid){
      return this.setState({
        isvalidCorreo : isEmailvalid
      })
    }
    return this.setState({
      isvalidCorreo : isEmailvalid
    });
  }
  validationPasword(){
    const responsepassword = password_validator.password(this.password.value,this.cpassword.value);
    console.log(this.password.value,this.cpassword.value)
    if(responsepassword.isCorrect){
      return this.setState({
        isvalidpwd : true,
        isvalidpwdMessage : [],
      });
    }
    return this.setState({
      isvalidpwd : false,
      isvalidpwdMessage : responsepassword.message,
    })
  }
  render() {
    const {
      isvalidpwd,isvalidci,
      isvalidCorreo,isvalidpwdMessage
    } = this.state;
    return (
      <div className="container_form">
        <form id="form_register_bussiness" onSubmit={this.registra}>
          <input ref={e => this.plan = e} type="hidden" name="plan" value={this.props.plan} />
          <h1>Datos de usuario {stepOneComplete(isvalidpwd)}</h1>
          <div>
            <input style={{color : "var(--trust-)"}} ref={e => this.username = e} spellCheck={false} name="username" placeholder="nuevo usuario" type="text" autoComplete="off"/>
            <input style={isvalidCorreo ? {color : "var(--trust-)"} : {color : "red"}} spellCheck={false} onChange={this.validationEmail} ref={e => this.correo = e} name="correo" placeholder="correo" type="email" autoComplete="off"/>
            <input style={isvalidpwd ? {color : "var(--trust-)"} : {color : "red"}} spellCheck={false} onChange={this.validationPasword} ref={e => this.password = e} name="password" placeholder="nueva contrase&ntilde;a" type="password" autoComplete="off" autoCorrect="true" />
            <input style={isvalidpwd ? {color : "var(--trust-)"} : {color : "red"}} spellCheck={false} onChange={this.validationPasword} ref={e => this.cpassword = e} name="cpassword" placeholder="confirme contrase&ntilde;a" type="password" autoComplete="off" autoCorrect="true" />
            {isvalidpwdMessage && isvalidpwdMessage.map((value) => {
              return <p style={{color : "white"}} className="flx ccN" key={value}>
                <ion-icon style={{color : "red", width : "17px"}} name="close-circle"></ion-icon>
                {value}
              </p>;
            })}
          </div>
          <h1>Datos personales {stepTwoComplete(isvalidci)}</h1>
          <div>
            <input style={{color : "var(--trust-)"}} spellCheck={false} ref={e => this.fullname = e} name="fullname" placeholder="nombre y apellido" type="text" autoComplete="off" />
            <input style={isvalidci ? {color : "var(--trust-)"} : {color : "red"}} spellCheck={false} pattern="[0-9]*" onChange={this.validationCi} value={this.state.cedula} name="ci" placeholder="numero de identificaci&oacute;n" type="text" autoComplete="off" />
          </div>
          <h1>Datos academicos</h1>
          <div>
            <select ref={e => this.academico = e} className="eM566" autoComplete="off" >
              <option value="No especificado">No especificado</option>
              <option value="primario">Primario</option>
              <option value="medio">Medio</option>
              <option value="superior">Superior</option>
            </select>
          </div>  
          <button type="submit">Continuar</button>
        </form>
      </div>
    );
  }
}
function stepOneComplete(isComplete){
  if(isComplete){
    return <ion-icon style={{color : "var(--trust-)"}} name="ios-checkmark-circle"></ion-icon>;
  }
  return <ion-icon style={{color : "red"}} name="ios-information-circle"></ion-icon>;
}
function stepTwoComplete(isComplete){
  if(isComplete){
    return <ion-icon style={{color : "var(--trust-)"}} name="ios-checkmark-circle"></ion-icon>;
  }
  return <ion-icon style={{color : "red"}} name="ios-information-circle"></ion-icon>;
}