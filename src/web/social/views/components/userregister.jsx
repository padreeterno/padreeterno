import React,{ Component } from "react";
import credential from "../../../modules/password_validator";

export default class Registro extends Component{
    constructor(props){
      super(props);
      this.state = {
        vpas : null,
        pushPasswordRequeriments: null,
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
      var isMatchedPassword = this.state.vpas;
      this.props.staginData({email,password,isMatchedPassword});
    }
    verifyPassword(){
      var password = this.password.value;
      var password_verifi = this.vpassword.value;
      var __password = credential.password(password,password_verifi);
      if(__password.isCorrect){
        return this.setState({
          vpas : true,
          pushPasswordRequeriments : "",
        });
      }
      this.setState({
        vpas : false,
        pushPasswordRequeriments : __password.message
      });
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
                <input type="password" style={this.state.pushPasswordRequeriments ? { color : "red"} : {color : "rgb(142, 156, 255)"}} ref={e => this.password = e} onChange={this.verifyPassword} placeholder="contraseña"/>
              </div>
              <div>
                <p style={{ fontWeight : 700 }}>confirmar contrase&ntilde;a</p>
                <input type="password" style={ this.state.pushPasswordRequeriments ? { color : "red"} : {color : "rgb(142, 156, 255)"}} ref={e => this.vpassword = e} onChange={this.verifyPassword} placeholder="verificar contrase&ntilde;a"/>
              </div>
            </div>
            <div>
              <button style={{background: "var(--frm-sbt-)",color: "white"}} type="submit">Continuar</button>
            </div>
          </div>
            {this.props.children}
            { this.state.pushPasswordRequeriments && <div style={{background: "transparent"}} className="flx PopUpRLMainView">
                {this.state.pushPasswordRequeriments.map((key) =>{
                return( <p style={{padding: "5px 10px",borderRadius: "10px",margin: "0px 5px", background : "red"}} key={key} >{key}</p> );
                })
                }
            </div>
            }
        </form>
      );
    }
  }
  