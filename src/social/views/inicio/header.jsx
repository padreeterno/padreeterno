import React from "react";
import { Link } from "react-router-dom";
import SearchBox from "./searchbox/search";
import Auth from "../../../fire/auth";
import Avatar from "./avatar/avatar";
import "./tpBar.css";

export default class TopBar extends React.Component{
  closeSession = async () => {
    try {
      await Auth.signOut();
    } finally{
      return window.location.replace("/social");
    }
  }
  render(){
    return(
      <div className="_w LoLTPbar">
        {/*Button show menu */}
          <Avatar/>
        {/** Nav Menu */}
        <div className="flx _w _h" style={{justifyContent : "space-around"}}>
          <Link className="flx ccN LoLTPBtn" to="/perfil">
            <ion-icon name="person"></ion-icon>Perfil
          </Link>
          <div></div>
          <Link className="flx ccN LoLTPBtn" to="/general">
            <ion-icon name="construct"></ion-icon>General
          </Link>
        </div>
        {/**Search box */}
        <div className="_w _h flx ccN">
          <SearchBox/>
        </div>
        <div className="flx ccN">
          <button className="flx ccN subBarSbtns" style={{background : "rgb(92, 98, 98)"}}><ion-icon name="quote"></ion-icon>Mis comentarios</button>
          <button className="flx ccN loGOutSBtn" onClick={this.closeSession}><ion-icon name="exit"></ion-icon>Cerrar session</button>
        </div>
        <button className="sungLfB subBarSbtns flx ccN " style={{background : "yellowgreen"}}><ion-icon name="ios-aperture"></ion-icon>Publicar</button>
      </div>
    )
  }
}

//<button className="subBarSbtns" style={{background : "yellowgreen"}}><ion-icon name="ios-aperture"></ion-icon>Publicar</button>