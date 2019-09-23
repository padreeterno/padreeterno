import React from "react";
import { E404, E500} from "./views/Errors";
export default class views_controller extends React.Component{
  render(){
    const { match : { params } } = this.props;
    console.log("Control views: ",this.props);
    switch(params.id.toLowerCase()){
      case "perfil" : {
        return <p>Perfil</p>
      }
      case "internalserver500" : {
        return <E500/>;
      }
      default : return <E404/>;
    }
  }
}
