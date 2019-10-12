import {Link } from "react-router-dom";
import React,{Component} from "react";
import "../index.css";
const services_plans = [
	{price:"$ 15",concurrency : "USD/mes" ,plan:"Personal", info : "Paquete con funciones y controles basicas",icone : "ios-contact",services:[
		{ icon : "ios-wallet", value : "Contabilidad",color : "var(--color-primary-button-)"},
		{ icon : "ios-chatbubbles", value : "Mensajeria",color : "var(--Configs--)"},
		{ icon : "ios-ribbon", value : "Recursos Humanos",color : "var(--trust-)"},
	]},
	{price:"$ 40",concurrency : "USD/mes" ,plan:"Empresa", info : "Paquete Premium para oficinas con funciones y controles avanzados" ,icone : "ios-wallet",services:[
		{ icon : "ios-wallet", value : "Contabilidad",color : "var(--color-primary-button-)"},
		{ icon : "ios-chatbubbles", value : "Mensajeria",color : "var(--Configs--)"},
		{ icon : "ios-ribbon", value : "Recursos Humanos",color : "var(--trust-)"},
		{ icon : "ios-videocam", value : "Video llamadas",color : "var(--trust-)"},
		{ icon : "speedometer", value : "Control envios",color : "var(--trust-)"},
	]},
	{price:" GRATUITA ",concurrency : "USD/mes", plan:"Estudiante", info : "Paquete con funciones y controles para estudiantes" , icone : "ios-school",services:[
		{ icon : "ios-chatbubbles", value : "Mensajeria",color : "var(--Configs--)"},	
		{ icon : "ios-school", value : "Espacio de Tareas",color : "var(--color-primary-button-)"},
	]},
]
class Inicio extends Component{
	render(){
		return(
			<div style={{backgroundColor : "#fafafa"}} className="flx container_services_plans ccN">
				<Link className="services_plans_login" to={"/negocios/loggin"}>Iniciar Session</Link>
				{services_plans.map((service,key) =>{
					console.log(service,key);
					return <div className="card_service_price" key={key}>
						<div className="header_card_service_price">
							<div className="info_card_service_price">
								<h1><ion-icon name={service.icone}></ion-icon>{service.plan}</h1>
								<div>
									<p className="info_card_service_price_text">{service.info}</p>
								</div>
								<p className="price_card_service_price">{service.price}</p>
								<div>
									<p>{service.concurrency}</p>
								</div>
							</div>
							<Link to={"/negocios/register/"+service.plan.toLowerCase()}>
								<button className="">COMIENZE AHORA</button>
							</Link>
						</div>
						<div className="footer_card_service_price">
							{
							service.services.map((_services,key)=>{
								return <li key={key}>
									<ion-icon name={_services.icon} style={{color : _services.color}}/>
									<p>{_services.value}</p>
								</li>
							})
							}
						</div>		
					</div>;
				})}
			</div>
			)
	}
}

export default Inicio;