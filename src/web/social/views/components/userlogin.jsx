import React,{ Component } from "react";

export default class Loggin extends Component{
  constructor(props){
    super(props);
    this.state = {
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
    var password = this.password.value;
    this.props.staginData({email,password})
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
        {this.props.children}
      </form>
    );
  }
}