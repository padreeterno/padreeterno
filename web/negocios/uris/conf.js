module.exports = {
    test : {
    plan : "empresa",
	usuario : {
		tt : "Datos de Usuario",
		reqone : {
			a : "usuario",
            type :"text",
            name :"userr"
		},
		reqtwo : {
			a : "correo electronico",
            type :"email",
            name :"emailr"
		},
		reqthree : {
			a : "contraseña",
            type :"password",
            name :"pwdr"
		},
	},
	personales : {
		tt : "Datos Personales",
		reqone : {
			a : "nombres completos",
            type :"text",
            name :"nmsr"
		},
		reqtwo : {
			a : "apellidos completos",
            type :"text",
            name :"aplr"
		},
		reqthree : {
			a : "numero de identificacion",
            type : "text",
            name :"numidr"
		}
	},
	academicos : {
		tt : "Datos Academicos",
		reqone : {
			a : "Estado academico",
			options : ["No especificado","Primario","Medio","Superior"],
            type :"select-options",
            name :"sacademr"
		}
	}
	
}
}