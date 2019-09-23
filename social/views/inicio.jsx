import React from "react";
import Left from "../principal/left";
import Right from "../principal/right";

const posts = [
  {id: 0, title: 'Hello World', content: 'Welcome to learning React!',autorLink : "yoshua", autor : "Yoshua Lopez", portrait : "https://tpc.googlesyndication.com/daca_images/simgad/16304621669026015853"},
  {id: 1, title: 'El fin del mundo.', content: 'Welcome to learning React!',autorLink : "yoshua", autor : "Yoshua Lopez", portrait : "https://tpc.googlesyndication.com/daca_images/simgad/16304621669026015853"},
  {id: 2, title: 'El inicio de un nuevo mundo.', content: 'Welcome to learning React!',autorLink : "yoshua", autor : "Yoshua Lopez", portrait : "https://tpc.googlesyndication.com/daca_images/simgad/16304621669026015853"},
];
const publications = [
  {uid : "333512-12323",avatar : "https://avatars0.githubusercontent.com/u/1?v=4",text : "En la playa",pic : "https://avatars0.githubusercontent.com/u/3?v=4", autor : "Yoshua Lopez"},
  {uid : "1212512-12323",avatar : "https://avatars0.githubusercontent.com/u/2?v=4",text : "De vacaciones",pic : "https://avatars0.githubusercontent.com/u/4?v=4", autor : "Mateo Lopez"}
];

export default class Inicio extends React.Component{
  render(){
    return(
      <div style={{display: "grid",gridTemplateColumns : "minmax(min-content,74%) minmax(min-content,1%) minmax(min-content, 25%)",padding: "10px 5px"}}>
        <Left posts={publications}>
        </Left>
        <div></div>
        <Right feeds={posts}/>
      </div>
    )
  }
}
