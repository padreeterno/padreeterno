module.exports.loginUser = async ({fire,email,password}) => {
    const retorno = { isSending : null, message : null}
	try {
		await fire.signInWithEmailAndPassword(email,password);
		retorno.isSending = 1;
	    retorno.message = "Inicio sesion satisfactoriamente.";
	    return retorno;
	} catch (error) {
        console.log(error);
		switch (error.code) {
			case "auth/wrong-password":
				retorno.isSending = 0;
				retorno.message = "Contraseña Incorrecta"
				return retorno;
			case "auth/user-not-found":
				retorno.isSending = 0;
				retorno.message = "Correo no encontrado, porfavor verificar el correo ingresado."
                return retorno;
            case "auth/network-request-failed" :
                retorno.isSending = 0;
                retorno.message = "Revisa tu conexion a internet."
                return retorno;
			default:
				retorno.isSending = 0;
				retorno.message = "Error no definido intentar recargado la página.";
				return retorno;
		}
	}
}