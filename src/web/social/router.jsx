import React,{Component} from 'react';
import RecoveryPassword from "./views/recovery_password";
import {E404} from "../Errors";
export default class Router extends Component{
    render(){
        const {match} = this.props;
        switch(match.params.id.toLowerCase()){
            case "recovery" : return <RecoveryPassword/>;
            default : return <E404/>;
        }
    }
}
