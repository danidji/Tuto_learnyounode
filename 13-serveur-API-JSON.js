const http = require('http');
const url = require('url');

// const myURL = new URL('/api/parsetime?iso=2013-08-10T12:10:15.474Z')
// console.log(myURL)


let server = http.createServer();
let port = process.argv[2];


server.on('request', (request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    // console.log(request.headers.host)
    // console.log(request.url)


    const monUrl = `http://${request.headers.host}${request.url}`;


    monUrlInfos = new URL(monUrl);
    // console.log(monUrlInfos)
    let URLSearchParams = monUrlInfos.searchParams;
    console.log(URLSearchParams.get('iso'))

    //Faire un switch avec le traitement des différents cas de traitement des 2 URL

    response.end();

})

server.listen(port)