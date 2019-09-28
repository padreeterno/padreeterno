import React, { Component, Fragment } from "react";
import axios from "axios";

import { cookieCreate} from "../helps"
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      estado : ""
    }

    this.inicioSesion = this.inicioSesion.bind(this);
    // Crea una referencia para guardar el elemento textInput del DOM
    this.username = React.createRef();
    this.password = React.createRef();
  }
  componentDidMount() {

  }
  inicioSesion(e) {
    e.preventDefault();
    const username = this.username.value;
    const password = this.password.value;
    const access = Date.now();
    console.log({access,username,password})
    //makeposting("http://127.0.0.1:8000/api/negocios/session", JSON.stringify({ access, username, password }))

    axios.post("http://127.0.0.1:8000/api/negocios/session",{ access, username, password },{headers : { 'Content-Type' : 'application/json;charset=utf-8' }})
    .then(result => {
        var respuesta = result.data;
        console.log(respuesta)
        if(respuesta.success){
          this.setState({
            estado : ""
          })
          cookieCreate({id : "_hash",response : respuesta.success},Date.now() + 60 * 60 * 4000,"/");
          return window.location.replace("/");
        }
        if(respuesta.error){
          return this.setState({
            estado : respuesta.error
          })
        }
      })
      .catch(err => {
        console.log(err);
        if(err.status === 0){
          return this.setState({
            estado : "No tiene conexion a internet"
          })
        }
      });
  }
  render() {
    return (
      <div className="R_r">
        <div className="AhJx">
          <form
            className="Clko_9 alct"
            style={{ backgroundColor: "rgba(214, 229, 255, 0.6)" }}
            onSubmit={this.inicioSesion}
          >
            <div className="flx ccN" style={{ margin: "20px 0px" }}>
              <p style={{ fontSize: "28px", letterSpacing: "-2px" }}>
                Inicio de sesion
              </p>
            </div>
            <div>
              <input
                style={{
                  fontSize: "18px",
                  borderBottomRightRadius: "0px",
                  borderBottomLeftRadius: "0px",
                  borderBottom: ".5px solid rgb(0,0,0,.1)"
                }}
                autoComplete="off"
                name="username"
                type="text"
                placeholder="nombre de usuario"
                required
                ref={e => this.username = e}
              />
            </div>
            <div>
              <input
                style={{
                  fontSize: "18px",
                  borderBottomRightRadius: "0px",
                  borderBottomLeftRadius: "0px",
                  borderBottom: ".5px solid rgb(0,0,0,.1)"
                }}
                name="pwdnego"
                type="password"
                placeholder="contrase&ntilde;a"
                required
                ref={e => this.password = e}
              />
            </div>
            <div>
            {
              !this.state.estado ? (<Fragment><div className="prueba"></div></Fragment>) : (<Fragment>
                  <p style={{ color: "red",fontWeight: 700,fontSize: "14px"}}>{this.state.estado}</p>
                </Fragment>)
            }
              <button className="BNT_subPP" type="submit">
                Ingresar
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
