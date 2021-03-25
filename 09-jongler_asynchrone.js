const http = require('http');
// console.log(process.argv)

// On définit un tableau qui recevra les résultats dans l'ordre de réalisation des requêtes
const result = [];
let cpt = 0;
let requestNb = process.argv.length - 2;
// console.log(requestNb)

function showResult() {
    for (let i = 0; i < requestNb; i++) {
        console.log(result[i])
    }
}

const get = function (i) {
    http.get(process.argv[2 + i], (response) => {
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
        response.on('data', (chunk) => {
            rawData += chunk;
        });
        response.on('end', () => {
            try {
                //On stocke les résultats requête après requetes dans le tableau des résultats
                result[i] = rawData;
                //on incrémente un compteur
                cpt++

                //Un fois que le compteur à atteint le nombre total de requête url (ici 3), on appelle la fonction d'affichage des résultats
                if (cpt === requestNb) {
                    showResult();
                }
            } catch (e) {
                console.error(e.message);
            }
        });
    }).on('error', (e) => {
        console.error(`Got error: ${e.message}`);
    });
}

//On lance nos requêtes le nombre de fois qu'il y a des requêtes
for (let i = 0; i < requestNb; i++) {
    get(i);
}


