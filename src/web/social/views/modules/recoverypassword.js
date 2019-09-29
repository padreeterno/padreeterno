export default async (fire,__email) => {
	const retorno = { isSending : null, message : null}
	try {
		await fire.sendPasswordResetEmail(__email);
		retorno.isSending = 1;
	    retorno.message = "Recuperacion de contraseña enviado satisfactoriamente.";
	    return retorno;
	} catch (error) {
		console.log(error);
		switch (error.code) {
			case "auth/invalid-email":
				retorno.isSending = 0;
				retorno.message = "Formato no válido de correo"
				return retorno;
			case "auth/user-not-found":
				retorno.isSending = 0;
				retorno.message = "Correo no encontrado, porfavor verificar el correo ingresado."
				return retorno;
			default:
				retorno.isSending = 0;
				retorno.message = "Error no definido intentar recargado la página.";
				return retorno;
		}
	}
}