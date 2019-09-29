import React,{ Component } from "react";
import { Link } from "react-router-dom";
import fireAuth from "../../fire/auth";
export default class Avatar extends Component{
    render(){
        return(
            <div style={{position : "relative"}}>
                <div className="leftAvt">
                    <p>Hola {fireAuth.currentUser.displayName && fireAuth.currentUser.displayName.slice(0,fireAuth.currentUser.displayName.indexOf(" ",1)).toUpperCase()}</p>
                </div>
                 {fireAuth.currentUser.photoURL &&
                    <div className="flx avatarUIXicn">
                        <Link to="/avatar" style={{backgroundImage : `url(${fireAuth.currentUser.photoURL})`}}></Link>
                    </div>
                 }
                 {!fireAuth.currentUser.photoURL &&
                    <div className="flx avatarUIXicn">
                        <Link to="/avatar" style={{backgroundColor : "red"}}></Link>
                    </div>
                 }
            </div>
        );
    }
}