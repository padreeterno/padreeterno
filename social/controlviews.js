import React from "react";
import { E404 } from "./views/Errors";
export default class ControlViews extends React.Component{
  render(){
    const { match : { params } } = this.props;
    console.log("Control views: ",this.props);
    switch(params.id.toLowerCase()){
      case "perfil" : {
        return <p>Perfil</p>
      }
      default : return <E404/>
    }
  }
}
