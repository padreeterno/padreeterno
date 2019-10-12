module.exports = async ({fireauth,email,password,firedatabase,userdata}) =>{
    const retorno = { isSending : null,message : null, code : null}
    try {
        const resultUID = await fireauth.createUserWithEmailAndPassword(email,password);
        const uid = resultUID.user.uid;
        await fireauth.currentUser.updateProfile({displayName : userdata.id });
        await firedatabase.ref(`users/${uid}`).set({uid : uid,userdata : userdata});
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