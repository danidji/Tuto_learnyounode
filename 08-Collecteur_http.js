const http = require('http');
// données d'entrée : 

let getMyUrl = process.argv[2]
// console.log(getMyUrl)

http.get(getMyUrl, (response) => {
    const { statusCode } = response;
    let error;
    if (statusCode !== 200) {
        error = new Error('La requête à échoué.\n' +
            `Status Code: ${statusCode}`);
    }
    if (error) {
        console.error(error.message);
        response.resume();
        return;
    }
    response.setEncoding('utf8');
    let rawData = '';
    let strLength = 0;
    response.on('data', (chunk) => {
        rawData += chunk;
        strLength += chunk.length;
        // console.log(strLength)
    });
    response.on('end', () => {
        try {
            console.log(strLength)
            console.log(rawData)
        } catch (e) {
            console.error(e.message);
        }
    });
}).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
});