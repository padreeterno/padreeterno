import fire from "../../../../fire/auth";
module.exports = (__email) => {
	const retorno = { isSending : null, message : null}
	return fire.sendPasswordResetEmail(__email)
		.then(() =>{
		    retorno.isSending = 1;
	        retorno.message = "Recuperacion de contraseña enviado satisfactoriamente.";
	        return retorno;
	    }).catch((error) => {
	        if(error.code === "auth/user-not-found"){
	        	retorno.isSending = 0;
	        	retorno.message = "Correo no encontrado, porfavor verificar el correo ingresado.";
	        	return retorno;
	        }
	        console.log(`Error Message: ${error.code}`);
	        retorno.isSending = 0;
	       	retorno.message = error.code;
	        return retorno;
	    });
	return retorno;
}
/*
fire.sendPasswordResetEmail(__email)
		.then(() =>{
		    retorno.isSending = 1;
	        retorno.message = "Recuperacion de contraseña enviado satisfactoriamente.";
	        return retorno;
	    }).catch((error) => {
	        if(error.code === "auth/user-not-found"){
	        	retorno.isSending = 0;
	        	retorno.message = "Correo no encontrado, porfavor verificar el correo ingresado.";
	        	return retorno;
	        }
	        console.log(`Error Message: ${error.code}`);
	        retorno.isSending = 0;
	       	retorno.message = error.code;
	        return retorno;
	    });

*/