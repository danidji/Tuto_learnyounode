// Module permettant de créer un flux de transformation simplement à l’aide d’une fonction qui prend un bloc de données et en renvoie un autre.
const map = require('through2-map');


const http = require('http');

let server = http.createServer();

let port = process.argv[2]

server.on('request', (request, response) => {


    request.pipe(map(function (chunk) {
        // console.log(chunk.toString().toUpperCase())
        return chunk.toString().toUpperCase()
    })).pipe(response)
})
server.listen(port)



