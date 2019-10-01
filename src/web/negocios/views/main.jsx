import {Link } from "react-router-dom";
import React,{Component} from "react";
import FloatCard from "./components/floatcard";
import AJUST from "../../config/ajustes";
import "./index.css";
let params = new URLSearchParams(encodeURIComponent(window.location.origin)).toString();

class Inicio extends Component{
	render(){
		return(
			<div className="R_r">
				<div className="AhJx">
					{
						AJUST.DBServer.Negocios.test.map(function(resultado,key){
							return(
								<FloatCard
									key={key}
									capitalHumano={resultado.data.capitalHumano}
									tipo={resultado.data.tipo}
									icone={resultado.data.icone}
									price={resultado.data.Precio}
									ofrece={resultado.data.ofrece}
								/>
							);
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

export default Inicio;