import React,{ Component } from "react";
import {Link } from "react-router-dom";

class FloatCard extends Component{
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
							<Link to={"/negocios/register/"+this.props.tipo.toLowerCase()}><button className="BNT_subPP">Siguiente</button></Link>
						</div>
					</div>
				</div>
			)
	}
};
export default FloatCard;