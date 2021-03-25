const http = require('http');
const fs = require('fs');

let port = process.argv[2];
let pathFile = process.argv[3];

const server = http.createServer()
server.on('request', (resquest, response) => {
    const stream = fs.createReadStream(pathFile);

    //a l'ouverture du fichier, on renvoi sont contenue au response pour le client
    stream.on('open', function () {
        // This just pipes the read stream to the response object (which goes to the client)
        console.log(stream.pipe(response));
    });


})
server.listen(port)


