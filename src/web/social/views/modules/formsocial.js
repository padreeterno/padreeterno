module.exports.loginuser = async ({fire,email,password}) =>{
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
module.exports.registeruser = async ({fire,email,password,id,database}) =>{
    const retorno = { isSending : null,message : null, code : null}
    try {
        const resultUID = await fire.createUserWithEmailAndPassword(email,password);
        const uid = resultUID.user.uid;
        await fire.currentUser.updateProfile({displayName : id });
        await database.ref(`users/${uid}`).set({ isBussiness : false,uid: uid, email : email, creado : Date.now(),name : id,username : id,});
        retorno.isSending = 1;
        retorno.message = uid;
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
            case "auth/email-already-in-use" :
                retorno.isSending = 0;
                retorno.message = "Correo electronico en uso"
                return retorno;
			default:
				retorno.isSending = 0;
                retorno.message = "Error no definido intentar recargado la página.";
                retorno.code = error.code;
				return retorno;
		}
	}
}