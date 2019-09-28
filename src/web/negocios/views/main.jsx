import {Link } from "react-router-dom";
import React,{Component} from "react";
import AJUST from "../../config/ajustes";
import "./index.css";
let params = new URLSearchParams(encodeURIComponent(window.location.origin)).toString();
// AJUSTES & DATA

class Inicio extends Component{
	render(){
		return(
			<div className="R_r">
				<div className="AhJx">
					{
						AJUST.DBServer.Negocios.test.map(function(reso,key){
								return(
									<REG
										key={key}
										capitalHumano={reso.data.capitalHumano}
										tipo={reso.data.tipo}
										icone={reso.data.icone}
										price={reso.data.Precio}
										ofrece={reso.data.ofrece}
									/>
								)
							})

					}	
					
				</div>
				<div className="r_su987I abs flx _w">
					<Link to={{ pathname: "/negocios/loggin", search: "?retorna="+ params }}><button className="flx ccN" style={{background: "var(--fsrt-ble-)",color: "white"}}><ion-icon name="ios-key" role="img" className="hydrated" aria-label="key"></ion-icon><p style={{fontWeight : 700}}>Iniciar sesion</p></button></Link>
				</div>
			</div>
			)
	}
}
class REG extends Component{
	mues(e,f){
	}
	render(){
		return(
				<div id="Wnd_fmR">
					<div className="D_trumP">
						<p>{this.props.price}</p>
					</div>
					<div className="Clko_9">
						<div>
							<div className="flx ccN">
								<ion-icon name={this.props.icone}></ion-icon>
								<h2 className="fnt_oi9">{this.props.tipo}</h2>
							</div>
							<div className="alct">
								<p>{this.props.capitalHumano}</p>
							</div>
						</div>
						<div>
							{
								this.props.ofrece.map(function(t,key){
									return(
											<li key={key} className="fnT_98J">{t}</li>
										)
								})
							}
						</div>
						<div className="alct">
							<Link to={"/reg/negocios/"+this.props.tipo.toLowerCase()}><button className="BNT_subPP">Siguiente</button></Link>
						</div>
					</div>
				</div>
			)
	}
}

export default Inicio;