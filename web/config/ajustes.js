module.exports = {
    urlDB : "http://localhost:8000/",
    urlLocal : "http://localhost:4000/",
    GTITLE : "PADRE ETERNO - ACUANTUM",
    URIS : {
        // inicio de sesion negocios
        frt : "negocios/session",
        //registros POST de datos
        reg : {
            empresa : "negocios/register/empresa",
            personal : "negocios/register/personal",
            Institucion : "negocios/register/institucion",
            estudiante : "negocios/register/estudiante"
        }
    },
    DBServer : {
        Social : {
            msgone : "Si tiene cuenta haga click en TENGO CUENTA si no la tiene, haga click en REGISTRARSE"
        },
        Negocios : {
            test : [
                {data : {Precio:"$ 15 c/mes",tipo:"Personal", icone : "ios-contact",ofrece:["Contabilidad","Mensajeria","Recursos Humanos"]}},
                {data : {Precio:"$ 40 c/mes",tipo:"Empresa", icone : "ios-wallet",ofrece:["Contabilidad","Mensajeria","Recursos Humanos","Video llamadas","Control envios"]}},
                {data : {Precio:"$ 40 c/mes",tipo:"Institución", icone : "ios-ribbon",ofrece:["Contabilidad","Mensajeria","Recursos Humanos","Video llamadas"]}},
                {data : {Precio:" GRATUITA ",tipo:"Estudiante", icone : "ios-school",ofrece:["Mensajeria","Espacio de Tareas"]}},
            ]
        },
        FWindows : {
            imgs : [],
            fras : {
                frst : "El mundo en tus manos.",
                scnd : "En un punto incierto de la tierra, hay una persona como tu, contáctalo."
            }
        }
    }
}