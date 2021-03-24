//test export : https://devdocs.io/node~12_lts/modules#modules_module_exports

///// essai export 
// module.exports = {
//     valeurAExporter1: 'hello',
//     valeurAExporter2: 'Salut poto'
// };

const
    fs = require('fs'),
    path = require('path');


///// test callback module.export

// module.exports = (a, b, callback) => {
//     let sum = a + b
//     let error = "J'ai une erreur"
//     callback(error, sum) // invoke the callback function
// }

function filtreExtension(pathFolder, extension, monCallback) {

    fs.readdir(pathFolder, (err, file) => {

        if (err) {
            //On appelle la fonction en callback en cas d'erreur
            monCallback(err)
        };
        // v-------on récupère le contenue du filtre dans un tableau 
        let result = file.filter(element => {

            return path.extname(element) === extension
        })
        //On appelle la fonction en callback si il n'y a pas d'erreur
        monCallback(null, result);
        //Appeler directement la fonction monCallback pour retourner les résultats ou les erreurs laisse la possibilité à l'utilisateur de gérér les données/erreurs comme il veut 
    })

}
// export de la fonction
module.exports = filtreExtension