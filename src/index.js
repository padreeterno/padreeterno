//Internet Explorer 9
import 'react-app-polyfill/ie9';
//Internet Explorer 11
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable';

import React from "react";
import ReactDOM from "react-dom";
import SubRun from "./subrun";
import Bussiness from "./bussiness/engine";
import "./general.css";
//Presets
import {cookieVerifi } from "./web/helps";
window.addEventListener("DOMContentLoaded",()=>{
  document.getElementById("ftPreview").remove();
});
cookieVerifi("_hash").then(function(e){
  if(e == null) return ReactDOM.render(<SubRun />,document.getElementById("bd_"));
  return ReactDOM.render(<Bussiness hash={e}/>,document.getElementById("bd_"));
}).catch(function(){
  return ReactDOM.render(<SubRun />,document.getElementById("bd_"))
});
