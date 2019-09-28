import React from "react";
import FireAuth from "../../../fire/auth";
import FireStorage from "../../../fire/storage";
import db from "../../../fire/db";
import CustomUploadButton from 'react-firebase-file-uploader/lib/CustomUploadButton';
import tipedUsername from "./username_tiped";
import "./stiles.css";
export default class RegisterBox extends React.Component{
  state = {
    username: "",
    avatar: "",
    isUploading: false,
    progress: 0,
    avatarURL: "",
    statusResend : true,
    sending : false,
    valueMessage : "",
    isEspecialChar : false
  };

  handleChangeUsername = event =>{
    this.setState({ username: event.target.value });
    var usernameValidityCharacter = tipedUsername.username(event.target.value);
    if(usernameValidityCharacter.message){
      return this.setState({
        isEspecialChar : true,
      });
    }
    if(usernameValidityCharacter.data < 5){
      return this.setState({
        username : this.props.username ? this.props.username : this.state.username,
        sending : false
      });
    }
    return this.setState({
      sending : true
    });
  };
  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
  handleProgress = progress => this.setState({ progress });
  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };
  handleUploadSuccess = filename => {
    this.setState({ avatar: filename, progress: 100, isUploading: false });
    var user = FireAuth.currentUser;
    FireStorage.ref("images/avatar")
      .child(filename)
      .getDownloadURL()
      .then(url => {
        this.setState({ avatarURL: url });
        user.updateProfile({ photoURL: this.state.avatarURL }).then(() => console.log("subida con exito")).catch(() => console.log("Error al subir imagen"));
      });
  };
  updateAvatarAndNameUser = (e) => {
    e.preventDefault();
    if(!this.state.sending){
      return this.setState({
        username : this.props.username ? this.props.username : this.state.username,
        sending : true,
        valueMessage : "Longitud de caracteres \"5\""
      });
    }
    var user = FireAuth.currentUser;
    user.updateProfile({
      displayName: this.state.username,
      photoURL: this.state.avatarURL
    }).then(() => {
      db.ref(`users/${user.uid}`).update({
        username : this.state.username,
        avatar : this.state.avatarURL
      }).then(()=>{
        return this.props.success();
      });
    });
  };
  callresendCorreo = () => {
    this.setState({
      statusResend : false
    });
    this.props.resendEmailVerification();
  };
  render(){
    var user = FireAuth.currentUser;
    return(
      <>
      <form className="FRBox" onSubmit={this.updateAvatarAndNameUser}>
        {this.state.isUploading && <ProgressBar progress={this.state.progress}/>}
        <div className="ImageContainerUpload">
          {!this.state.avatarURL && ( user.photoURL && <img alt="userProfile" style={{ objectFit : "cover"}} width="auto"  height="300px" src={user.photoURL}/>)}
          {this.state.avatarURL && <img alt="userProfile" style={{ objectFit : "cover"}} width="auto"  height="300px" src={this.state.avatarURL} />}
        </div>
        <div className="CBtnContainer">
        <CustomUploadButton
          accept="image/*"
          name="avatar"
          filename={user.uid}
          //randomizeFilename
          storageRef={FireStorage.ref("images/avatar")}
          onUploadStart={this.handleUploadStart}
          onUploadError={this.handleUploadError}
          onUploadSuccess={this.handleUploadSuccess}
          onProgress={this.handleProgress}
          style={{backgroundColor: 'steelblue', color: 'white', padding: 10, borderRadius: 10,fontSize : 12,letterSpacing: 2,boxShadow: "1px 1px 10px -2px #353535", cursor: 'pointer'}}
        >Subir imagen</CustomUploadButton>
        </div>
        <div style={{textAlign: "center",padding: "20px 0px"}}>
          <div>
            <p style={{padding: "0px 10px",color: "white",fontWeight: 700}}>Nombre Completo</p>
            <input
              type="text"
              style={this.state.isEspecialChar ? { color : "red"} : { color : "black"}}
              value={this.state.username}
              name="username"
              placeholder={this.props.username}
              onChange={this.handleChangeUsername}
            />
            {this.state.valueMessage && <p style={{color: "#d70000",fontSize: 11}}>{this.state.valueMessage}</p>}
          </div>
        </div>
        <div className="ctr_txt">
          <button style={{color: "white",background: this.state.sending ? "black" : "rgb(219, 219, 219)",padding: "10px 15px",borderRadius: 20}} type="submit">Continuar</button>
        </div>
        <div>
          {user.emailVerified ? (
            <div style={{ color : "white",display: "flex",justifyContent: "start",alignItems: "center"}}>
              <ion-icon style={{ paddingRight: 5}} name="ios-checkmark-circle"></ion-icon>
              <p>Correo verificado</p>
            </div>
          ) : (
            <div style={{ display: "flex",justifyContent: "space-between",alignItems: "center"}}>
              <div style={{ color : "white",display: "flex",justifyContent: "start",alignItems: "center"}}>
              <ion-icon style={{ paddingRight: 5}} name="ios-mail-unread"></ion-icon>
                <p>Correo no verificado</p>
              </div>
              <div>
                { this.state.statusResend && <button type="button" className="ResendEmailRecovery" onClick={this.callresendCorreo}>Reenviar correo</button> }
              </div>
            </div>
        )}
        </div>
      </form>
      </>
    )
  }
}
class ProgressBar extends React.Component{
  render(){
    return(
      <div>
        <div style={{padding: "10px 20px"}}>
          <div style={{ width: "100%",height: 10,borderRadius: 20,background: "#71717147"}}>
            <div style={{height: "100%",width: this.props.progress +"%",background: "rgb(132, 187, 255)",borderRadius: 20,}}></div>
          </div>
        </div>
      </div>
    );
  }
}
