import React, { Component } from "react";
import fire from "../../fire/auth";
import { loginUser } from "./modules/loginuser";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageLogged : "",
      dontstaySendingLogin : true,
    }
    this.inicioSesion = this.inicioSesion.bind(this);
    this.email = React.createRef();
    this.password = React.createRef();
  }
  async inicioSesion(e) {
    e.preventDefault();
    this.setState({dontstaySendingLogin : false});
    const email = this.email.value;
    const password = this.password.value;
    const isLogged = await loginUser({fire,email,password});
    if(isLogged.isSending === 0){
      return this.setState({
        dontstaySendingLogin : true,
        messageLogged : isLogged.message,
      });
    }
    return window.location.assign("/");;
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
                name="email"
                type="text"
                placeholder="Correo electr&oacute;nico"
                required
                ref={e => this.email = e}
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
                placeholder="Contrase&ntilde;a"
                required
                ref={e => this.password = e}
              />
            </div>
            <div>
              {this.state.messageLogged && <p style={{ color: "red",fontWeight: 700,fontSize: "14px"}}>{this.state.messageLogged}</p>}
              <button className="BNT_subPP" type={this.state.dontstaySendingLogin ? "submit" : "button"}>{this.state.dontstaySendingLogin ? " Ingresar " : " . . . "}</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
