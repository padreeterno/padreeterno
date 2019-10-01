import React,{Component} from 'react';
import { E404 } from "../Errors";
import Login from "./login";
export default class Router extends Component{
    render(){
        const {match} = this.props;
        switch(match.params.id.toLowerCase()){
            case "login" : return <Login/>
            default : return <E404/>
        }
    }
}