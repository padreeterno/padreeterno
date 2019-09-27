import React,{ Component } from "react";
import fire from "../../../fire/auth";

export default class Recovery_password extends Component{
    constructor(props){
        super(props);
        this.state = {};

        this.emailToRecovery = React.createRef();
        this.sendEmail = this.sendEmail.bind(this);
    }
    sendEmail(e){
        e.preventDefault();
        var __email = this.emailToRecovery.value;
        var firebaseUriResetPassword = "";
        fire.sendPasswordResetEmail(__email,firebaseUriResetPassword).then((e) =>{
            console.log("Password recovery send sucessfully", e);
            return window.location.replace("/social")
        });
    }
    render(){
        return(
            <div style={{background : "white"}} className="flx ccN StatIc Pfix">
                <form style={{padding: "50px 50px",textAlign: "center"}} onSubmit={this.sendEmail}>
                    <h1 style={{paddingBottom: "50px"}}>Recuperar Contraseña</h1>
                    <input type="email" placeholder="correo electronico" ref={(value) => this.emailToRecovery = value}/>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        );
    }
} 