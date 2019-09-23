import React,{Component} from 'react';
import {E404} from "../Errors";
export default class Router extends Component{
    render(){
        const {match} = this.props;
        switch(match.params.id.toLowerCase()){
            case "terminos" : {
                return(
                  <>
                    <center>Terminos y condiciones</center>
                  </>
                );
            }
            default : {
              return <E404/>;
            }
        }
    }
}
