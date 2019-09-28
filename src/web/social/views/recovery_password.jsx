import React,{ Component } from "react";
import fire from "../../../fire/auth";
import recoverypassword from "./actions/recoverypassword";

export default class Recovery_password extends Component{
    constructor(props){
        super(props);
        this.state = {
            messageRecovery : false
        };
        this.emailToRecovery = React.createRef();
        this.sendEmail = this.sendEmail.bind(this);
    }
    async sendEmail(e){
        e.preventDefault();
        var __email = this.emailToRecovery.value;
        var estatus = await recoverypassword(fire,__email);
        if(estatus.isSending === 1){
            return window.location.replace(`/social?recovery=${estatus.message}`);
        }
        return this.setState({
            messageRecovery : estatus.message
        });
    }
    render(){
        return(
            <div style={{background : "white"}} className="flx ccN StatIc Pfix">
                <form style={{padding: "50px 50px",textAlign: "center"}} onSubmit={this.sendEmail}>
                    <h1 style={{paddingBottom: "50px"}}>Recuperar Contraseña</h1>
                    <input type="email" placeholder="correo electronico" ref={(value) => this.emailToRecovery = value}/>
                    <button type="submit">Enviar</button>
                    {this.state.messageRecovery && <div>
                        <p>{this.state.messageRecovery}</p>
                    </div>}
                </form>
            </div>
        );
    }
} 