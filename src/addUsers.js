import db from "./fire/db";
export default addUser = ({uid,email,name,username,creado}) => {
    new Promise((sucess,failed)=>{
        db.ref("/users"+uid).set({
            uid,
            username,
            email,
            creado,
            name,
        }).then(()=>{
            return sucess(true);
        }).catch((error)=>{
            return failed(error);
        });
    });
}
/*
database.com/users/:uid
{
    "uid" : "ID UNICO", String
    "username" : "Generado",    String
    "email" : "CorreoElectronico",  String
    "creado" : "Creado", Int
    ""
}
*/