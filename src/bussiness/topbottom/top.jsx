import React, { Component } from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

import "./index.css";
import {Ajustes,Notifies} from "../PopUps/popups";

class TOP extends Component {
  componentDidMount(){
    var id = this.props.hash;
    axios.get("http://127.0.0.1:8000/api/"+id+"/get/"+id+"/top").then(e =>{
      var estado = e.data;
      if(estado.error) return this.setState({ username : estado.error });
      this.setState({ username : estado.success.username, verificado : estado.success.verificado });
      axios.get("https://127.0.0.1:8000/api/planes/"+estado.success.plan).then(e =>{
        console.log(e);
      }).catch(e =>{
        if(e.status < 1){
          return alert("No tienes coneccion a internet")
        }
      });
    }).catch(e =>{
      if(e.status < 1){
        return alert("No tienes coneccion a internet")
      }
    })
  }
  constructor(props){
    super(props);
    this.state = {
      popAjuste : true,
      popNotifis : true,
      barraLateral : true,
      //DATOS USUARIO
      username : "",
      verificado : true
    }
    this.Clicka = this.Clicka.bind(this);
    this.NotificacionPopUP = this.NotificacionPopUP.bind(this);
    this.ConfiguracionesPopUP = this.ConfiguracionesPopUP.bind(this);
    this.buscar = this.buscar.bind(this);

    this.busca = React.createRef();
  }
  Clicka(){
    this.setState((state) =>{
      return {barraLateral : !state.barraLateral}
    });
  }
  NotificacionPopUP(){
    this.setState((state) =>{
      return {popNotifis : !state.popNotifis}
    });
  }
  buscar(e){
    e.preventDefault();
  }
  ConfiguracionesPopUP(){
    this.setState((state,props) =>{
      return {popAjuste : !state.popAjuste}
    });
  }
  render() {
    return (
        <div className="j545K _w flx one">
            {/**Nav Bar & Mensajeria */}
            <div className="flx one two _w">
              {/**LEFT BOX */}
              <div className="_w _h two">

              </div>
              <div className="_w" >
                <div className={this.state.barraLateral ? "Pfix" : "Pfix StatIc"}>
                  <div className="tp98c" style={this.state.barraLateral ? { transition :".3s",width : "100px"} : {height : "auto", transition :".3s",width : "300px"}}>
                    <div>
                      <button onClick={this.Clicka} className="diblk">
                        <div></div>
                        <div></div>
                        <div></div>
                      </button>
                    </div>
                    <div>
                        {
                          this.state.barraLateral ? (function(){
                            return(<div></div>)
                          }()) : (function(){
                            return ["Contabilidad","Mensajeria","Recursos Humanos","Video llamadas","Control envios"].map(function(res,key){
                              return(
                                <div key={key}>
                                  <div>
                                    <Link to={"/"+res.toLowerCase()}>
                                      <button className="_w _h hopL09" style={{padding : "20px 0px",margin : "0px"}} type="submit">
                                      <ion-icon name="home"></ion-icon>
                                        <p style={{fontWeight : "700"}}>{res}</p>
                                      </button>
                                    </Link>
                                  </div>
                                </div>
                              )
                            });
                          }())
                        }
                    </div>
                  </div>
                </div>
              </div>
              <div className="two _h _w alct">
                <Link to="/messages">
                  <button className="_h flx ccN btnreset bLp0J">
                  <i style={{transform: "rotate(180deg)"}} className="material-icons">chat</i>
                  <p style={{ padding: "10px 10px" }}>Mensajeria</p>
                  </button>
                </Link>
              </div>
            </div>
            {/**Search */}
            <div className="flx ccN two _w">
                <form onSubmit={this.buscar}>
                  <div style={{ height : "27px"}} className="flx fndUs">
                      <input ref={e => this.busca = e} style={{ fontSize: "15px",fontWeight: "normal", padding : "0px 15px", borderRadius : "10px 0px 0px 10px" }} className="btnreset" type="search" name="" id=""/>
                      <button style={{ background : "rgb(58, 150, 255)", borderRadius : "0px 10px 10px 0px" }} className="flx ccN btnreset">
                      <i className="material-icons">search</i>
                      </button>
                  </div>
                </form>
            </div>
            {/**Configs & Notifies & Profile */}
            <div className="flx one two _w">
              <div className="two">
                <button onClick={this.ConfiguracionesPopUP} className="_h flx ccN btnreset bLp0J">
                    <ion-icon name="settings"></ion-icon>
                    <p>Ajustes</p>
                  </button>
              </div>
              <div className="two">
                <button onClick={this.NotificacionPopUP} className="_h flx ccN btnreset bLp0J">
                <ion-icon name="notifications"></ion-icon>
                    <p>Notificaciones</p>
                  </button>
              </div>
              <div className="two">
                <Link to={"/p/" + this.state.username}>
                  <button className="_h flx ccN btnreset bLp0J">
                    <ion-icon name="contact"></ion-icon>
                    <p style={{ padding: "0px 10px",fontWeight: 700 }}>{this.state.username}</p>
                    <i style={!this.state.verificado ? {background: "rgb(100, 100, 100)",borderRadius: "50%",width: "15px",height: "15px" } : {background: "rgb(51, 244, 255)",borderRadius: "50%",width: "15px",height: "15px" }} className="material-icons"/>
                    </button>
                </Link>
              </div>
            </div>
            {
              this.state.popNotifis ? (function(e){
                return(
                  <div></div>
                )
              }(this.state.popNotifis))
              :
              (function(e){
                return(
                  <div className="Pfix StatIc flx ccN">
                    <div id="PopUPBig">
                      <div className="seconte">
                        <div style={{background : "var(--Notifies--)"}} className="terconE">
                          <p>Notificaciones</p>
                        </div>
                        <button onClick={e}>
                          <ion-icon name="close"></ion-icon>
                        </button>
                      </div>
                      <Notifies/>
                    </div>
                  </div>
                )
              }(this.NotificacionPopUP))
            }
            {
              this.state.popAjuste ? (function(e){
                return(
                  <div></div>
                )
              }(this.state.popAjuste))
              :
              (function(e){
                return(
                  <div className="Pfix StatIc flx ccN">
                    <div id="PopUPBig">
                      <div className="seconte">
                        <div style={{background : "var(--Configs--)"}} className="terconE">
                          <p>Ajustes</p>
                        </div>
                        <button onClick={e}>
                          <ion-icon name="close"></ion-icon>
                        </button>
                      </div>
                      <Ajustes/>
                    </div>
                  </div>
                )
              }(this.ConfiguracionesPopUP))
            }
        </div>
    );
  }
}
export default TOP;
