import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../modernize.js";
import handsWorld from "../images/hands_world.jpg";
import handsWorldwebp from "../images/hands_world.webp";
import "./principal.css"
//import Body from "./components/body";

import AJUST from "./config/ajustes";
export default class Principal extends Component {
  render() {
    return(
        <div>
          <TOP/>
            <BODY/>
        </div>
    )
  }
}
class TOP extends Component{
  render(){
    return(
      <div style={{display: "grid",width: "100%",height: "50px",background: "var(--fsrt-ble-)",gridTemplateColumns: "50% 50%"}}>
        <div className="_w _h flx ccN">
          <div>
            <p style={{fontSize: "25px",fontWeight: "700",color: "white"}}>PadreEterno - Acuantum</p>
          </div>
        </div>
        <div>
        <div></div>
        </div>
      </div>
    )
  }
}
class BODY extends Component {
  state = {
    deten : false,
    compatibility : null
  }
  componentDidMount(){
    Modernizr.on('webp', (result)=>{
      if (result) {
        return this.setState({
          compatibility : true,
          deten : true
        });
      } else {
        return this.setState({
          compatibility : false,
          deten : true
        });
      }
    });
  }
  render() {
    return (
      <div className="b_fdx">
        <div className="flx trc_B one">
          <div className="two lft_rss">
            {this.state.deten && 
              <div className="test_IMG cnt_img_15 TestReal" style={this.state.compatibility ? {backgroundImage : `url(${handsWorldwebp})`} : {backgroundImage : `url(${handsWorld})`}}></div>
            }
          </div>
          <div className="two rgt_rss">
            <div className="cnt_img_15">
              <div className="cnt_ltt_trs btnSh">
                <p className="ttdf">{AJUST.DBServer.FWindows.fras.frst}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flx trc_B one">
          <div className="two rgt_rss">
            <div className="cnt_img_15">
              <div className="cnt_ltt_trs">
                <p className="ttdf">{AJUST.DBServer.FWindows.fras.scnd}</p>
              </div>
            </div>
          </div>
          <div className="two lft_rss">
            {this.state.deten && 
              <div className="test_IMG cnt_img_15 TestReal" style={this.state.compatibility ? {backgroundImage : `url(${handsWorldwebp})`} : {backgroundImage : `url(${handsWorld})`}}></div>
            }
          </div>
        </div>
        <div className="tpl_">
          <div className="flx btN_s">
            <Link to="/social">
              <button className="btn btn_NMN flx ccN" type="submit">
              <ion-icon name="ios-create"></ion-icon>
                <p style={{fontWeight : 700}}>Ir Social</p>
              </button>
            </Link>
            <Link to="/negocios">
              <button className="btn btn_NMN flx ccN" type="submit">
              <ion-icon name="ios-briefcase"></ion-icon>
              <p style={{fontWeight : 700}}>Ir Negocios</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
