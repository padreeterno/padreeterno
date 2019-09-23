import React,{Component} from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import "./file.css";
export default class Left extends Component{
    constructor(props) {
        super(props);
        this.state = { value: 'Hi' };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({ value: e.target.value });
    }
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
                    <textarea rows="5" cols="50" value={this.state.value} onChange={this.handleChange}/>
                    <input type="file"/>
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
    return (<Modal isOpen={state.modalReturnedFalse} className="modalScreenDanger" overlayClassName="overlayModalScreen">
    <div>
      <p>Test</p>
    </div>
    <button onClick={()=> state.modalReturnedFalse = true}>
      <ion-icon style={{ color : "red"}} name="ios-close-circle"></ion-icon>
    </button>
</Modal>);
}