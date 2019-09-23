import React, {Component} from "react";
export class Ajustes extends Component{
    constructor(props) {
        super(props);
        this.state = {
          a : true
        };
        this.close = this.close.bind(this);
    }
    close(){
        this.setState((state) =>{
            return {a : !state.a}
        })
    }
    render(){
        return(
            <div>
                <div style={{background : "var(--Configs--)", padding: "5px",marginTop: "5px",color: "white"}}>
                    <p>Ajustes de cuenta</p>
                </div>
                <div>
                    <div>Nombres</div>
                </div>
                <div style={{background : "var(--Configs--)", padding: "5px",marginTop: "5px",color: "white"}}>
                    <p>Ajustes de plataforma</p>
                </div>
                <div></div>
            </div>
        )
    }
}
export class Notifies extends Component{
    render(){
        return(
            <div>
                
            </div>
        )
    }
}
export class Alert extends Component{
    render(){
        return(
            <div >
                
            </div>
        )
    }
}