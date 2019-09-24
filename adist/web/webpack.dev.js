const path = require('path');
// Extract CSS
module.exports = {
    one : {
        entry: {
            web : "./web/principal.jsx",
            two : "./web/negocios/views/main.jsx"
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[hash].web_rende.js',
            publicPath: "/web"
        },
    },
    two : {
        entry: {
            one : "./web/negocios/uris/empresa.jsx",
            two : "./web/negocios/uris/estudiante.jsx",
            three : "./web/negocios/uris/institucion.jsx",
            four : "./web/negocios/uris/personal.jsx"
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[hash].web_uris.js',
            publicPath: "/web"
        },
    },
    three : {
        entry: {
            one : "./web/social/views/main.jsx",
            two : "./web/social/views/xtr.jsx",
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[hash].web_views.js',
            publicPath: "/web"
        },
    }
}