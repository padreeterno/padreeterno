import React,{Component} from "react";
import input_validator from "./input_validator";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import "./file.css";
export default class Left extends Component{
    constructor(props) {
        super(props);
        this.state = {
            post_input: 'Hi',
            isUploading : null,
            avatarURL : null,
            avatar : null,
            progress : null,
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(item) {
        var result_input = input_validator.input_verifi_char(item.target.value);
        if(result_input.value !== null){
            return this.setState({ post_input: result_input.value });
        }
        return;
    }
    handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
    handleProgress = progress => this.setState({ progress });
    handleUploadError = error => {
        this.setState({ isUploading: false });
        console.error(error);
    };
    handleUploadSuccess = filename => {
        this.setState({ avatar: filename, progress: 100, isUploading: false });
        
    };
    render(){
        return(
            <div style={this.props.posts && {marginBottom: "auto"}} class={this.props.posts ? "contenFieldPrincipal" : "contenFieldPrincipal flx ccN"}>
                {
                    this.props.posts && this.props.posts.map((res,key) => {
                        return(
                         <div key={key} className="OrPsRj45">
                            <div className="flx rUfLP0">
                                <Link to={`/profile/${res.uid}`} className="flx rUfLP1">
                                    <img src={res.avatar}/>
                                    <p>{res.autor}</p>
                                </Link>
                                <button className="flx ccN rUfLPShare" onClick={moDal}><ion-icon name="share"></ion-icon>Compartir</button>
                             </div>
                             <img className="rUfLP2" src={res.pic}/>
                             <div>
                                 <p>{res.text}</p>
                             </div>
                             {/* COMMENTS */}
                         </div>   
                        );
                    })
                }
                {
                    !this.props.posts && <form className="PsTContextPsT">
                        <p>Aun no tienes publicaciones, realiza tu primera publicacion.</p>
                        <textarea rows="5" cols="50" value={this.state.post_input} onChange={this.handleChange}/>
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
                        <button>Publicar</button>
                    </form>
                }
            </div>
        );
    }
}
function moDal(){
    var state = {
        modalReturnedFalse : false
    };
    return (
    <Modal isOpen={state.modalReturnedFalse} className="modalScreenDanger" overlayClassName="overlayModalScreen">
        <div>
            <p>Modal share showed</p>
        </div>
        <button onClick={()=> state.modalReturnedFalse = true}>
            <ion-icon style={{ color : "red"}} name="ios-close-circle"></ion-icon>
        </button>
    </Modal>
    );
}