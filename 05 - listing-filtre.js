// doc utilisation de fs.readdir() : https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback
// => 2 paramètres : un chemin + un calback avec 2 arguments => err + un tableau de fichier contenue dans le dossier 

const fs = require('fs');
const path = require('path');

/////Données d'entrée
//console.log(process.argv)

let cheminDossier = process.argv[2];
let extensionATester = process.argv[3];
// On rajoute le . devant l'extension à tester
extensionATester = `.${extensionATester}`
// console.log(extensionATester);

// console.log(cheminDossier)
// console.log(extensionATester)

// méthode pour récupérer l'extension d'un fichier : path.extname => https://nodejs.org/api/path.html#path_path_extname_path

// test : 
// console.log(path.extname('index.html')) => on récupère .html

fs.readdir(cheminDossier, (err, file) => {
    // console.log(file); // récupération d'un tableau avec les différents document contenue dans le dossier

    if (err) throw err;
    // v-------on récupère le contenue du filtre dans un tableau 
    let result = file.filter(element => {
        // console.log(path.extname(element) === extensionATester)

        return path.extname(element) === extensionATester
    })
    // v-----On parcourt le tableau avec les résultats pour les afficher
    result.forEach(element => {
        console.log(element)
    })


})
