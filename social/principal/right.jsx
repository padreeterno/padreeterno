import React,{Component} from "react";
import "./file.css";
export default class Right extends Component{
    render(){
        return(
            <div style={{height: "auto",overflowY: "scroll",maxHeight: "80vh", padding : 10}} className="contenFieldPrincipal">
                <p className="ttLFeedsNoticias">Noticias</p>
                {
                    this.props.feeds && this.props.feeds.map((data,key) => {
                        return(
                            <div key={key} className="CnTFeedsCnt">
                                <p className="CntFeedsTitle">{data.title}</p>
                                <img src={data.portrait}/>
                                <div>
                                    <p>{data.content}</p>
                                </div>
                                <div className="CntFeedsRel">
                                    <a href={`/profile/${data.autorLink}`}>{data.autor}</a>
                                    <button>Compartir</button>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

/*
                <div style="padding: 10px 5px;border-radius: 10px;background: white;margin-top: 15px;">
                    <p style="font-size: 20px;color: #484848;padding: 10px 0px;">Protestas en Chile</p>
                    <img style="width: 100%;object-fit: cover;object-position: center;height: 200px;" src="https://tpc.googlesyndication.com/daca_images/simgad/16304621669026015853"/>
                    <div>
                        <p>Thank you Daniel. I'm a little bit surprised that toggling menu bar visibility isn't saved in settings file, but as far as I understand deleting content of user settings should bring default settings, so this is it. Thanks again</p>
                    </div>
                    <div style="display: flex;justify-content: space-between;align-items: center;padding-top: 10px;">
                        <a href="/profile/yell" style="font-size: 15px;color: white;font-weight: 700;background: #2e6ad9;padding: 5px 5px;border-radius: 10px;">Yoshua Lopez</a>
                        <button style="background: aliceblue;border: none;box-shadow: 1px 2px 5px #00000042;font-size: 13px;">Compartir</button>
                    </div>
                </div>

*/