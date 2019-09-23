import React from 'react';
import ReactDOM from 'react-dom';
import "../general.css";
//import axios from "axios";
//View Principal
import Router from "./router";
//IF LOGGED Negocios
import Engine from "../UIX-user/engine"
//IF LOGGED Social
import EngineSocial from "../UIX-social/engine";
//Presets
import {cookieVerifi } from "../helps";
cookieVerifi("_hash").then(function(e){
  return ReactDOM.render(<Engine hash={e}/>,document.getElementById("bd_"))
}).catch(function(){
  cookieVerifi("_vhost").then(e =>{
    console.log(e);
    return ReactDOM.render(<EngineSocial hash={e}/>,document.getElementById("bd_"));
  }).catch(e =>{
    return  ReactDOM.render(<Router/>,document.getElementById("bd_"))
  })
})
