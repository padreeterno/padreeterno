import React,{Component} from 'react';
import { E404 } from "../Errors";
import Register from "./register";
export default class Router extends Component{
    render(){
        const {match} = this.props;
        switch(match.params.id.toLowerCase()){
            case "personal" :
            case "estudiante" :
            case "institucion" :
            case "institución" :
            case "empresa" :
                return <Register plan={match.params.id.toLowerCase()}/>
            default : return <E404/>
        }
    }
}