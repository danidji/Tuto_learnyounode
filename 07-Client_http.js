// utilisation de la méthode http.get() : https://devdocs.io/node~14_lts/http#http_http_get_options_callback
const http = require('http');
// données d'entrée : 

let getMyUrl = process.argv[2]
// let getMyUrl = null

http.get(getMyUrl, (response) => {
  const { statusCode } = response;
  // const contentType = response.headers['content-type'];
  // console.log(contentType)
  let error;

  if (statusCode !== 200) {

    // On créer un objet d'erreur : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
    error = new Error('La requête à échoué.\n' +
      `Status Code: ${statusCode}`);
  }/*  else if (!/^application\/json/.test(contentType)) {
    error = new Error('Invalid content-type.\n' +
      `Expected application/json but received ${contentType}`);
  } */
  if (error) {
    console.error(error.message);
    // Consume response data to free up memory
    response.resume();
    // console.log(response.resume());
    return;
  }

  response.setEncoding('utf8');
  let rawData = '';

  //Le contenue des date est découper en petit paquet que l'on rassemble dans la variable rawData
  response.on('data', (chunk) => {
    console.log(chunk)
    // rawData += chunk;

    // rawData = chunk
  });
  response.on('end', () => {
    try {
      // const parsedData = JSON.parse(rawData); => a utiliser si les données d'entré sont du JSON
      console.log(rawData)
      // console.log(parsedData);
    } catch (e) {
      console.error(e.message);
    }
  });
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
});