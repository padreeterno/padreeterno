const dev = require("./webpack.dev");
const prod = require("./webpack.prod");
module.exports = (env,argv) =>{
    var isDevelopmentMode = ( argv.mode === "development" );
    console.log(process.env.NODE_ENV)
    if(isDevelopmentMode){
        return dev;
    }
    return prod;
}