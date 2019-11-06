import React, { Component } from "react";
import { Link } from "react-router-dom";
//import handsWorld from "../images/hands_world.jpg";
import handsWorldwebp from "../images/hands_world.webp";
import "./principal.css"
//import Body from "./components/body";

export default class Principal extends Component {
  render() {
    return (
      <div>
        <TOP />
        <BODY />
      </div>
    )
  }
}
class TOP extends Component {
  render() {
    return (
      <div style={{ display: "grid", width: "100%", height: "50px", background: "var(--fsrt-ble-)", gridTemplateColumns: "50% 50%" }}>
        <div className="_w _h flx ccN">
          <div>
            <p style={{ fontSize: "25px", fontWeight: "700", color: "white" }}>PadreEterno - Acuantum</p>
          </div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    )
  }
}
var phrase_top = "El mundo en tus manos.";
var phrase_bottom = "En un punto incierto de la tierra, hay una persona como tu, contáctalo.";

class BODY extends Component {
  render() {
    return (
      <div className="b_fdx">
        <div className="flx trc_B one">
          <div className="two lft_rss">
            <div className="test_IMG cnt_img_15 TestReal" style={{ backgroundImage: `url(${handsWorldwebp})` }}></div>
          </div>
          <div className="two rgt_rss">
            <div className="cnt_img_15">
              <div className="cnt_ltt_trs btnSh">
                <p className="ttdf">{phrase_top}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flx trc_B one">
          <div className="two rgt_rss">
            <div className="cnt_img_15">
              <div className="cnt_ltt_trs">
                <p className="ttdf">{phrase_bottom}</p>
              </div>
            </div>
          </div>
          <div className="two lft_rss">
            <div className="test_IMG cnt_img_15 TestReal" style={{ backgroundImage: `url(${handsWorldwebp})` }}></div>
          </div>
        </div>
        <div className="tpl_">
          <div className="flx btN_s">
            <Link className="btn btn-primary d-flex" to="/social">
              <ion-icon name="ios-create"></ion-icon>
              <p className="mb-0" style={{ fontWeight: 700 }}>Ir Social</p>
            </Link>
            <Link className="btn btn-primary d-flex" to="/negocios/">
              <ion-icon name="ios-briefcase"></ion-icon>
              <p className="mb-0" style={{ fontWeight: 700 }}>Ir Negocios</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
