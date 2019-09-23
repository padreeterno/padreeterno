import React,{Component} from 'react';

import Login from "./login";
export default class Router extends Component{
    render(){
        const {match} = this.props;
        switch(match.params.id.toLowerCase()){
            case "test" : {
                return <div>PRUEBA</div>
            }
            case "login" : {
                return <Login/>
            }
        }
    }
}