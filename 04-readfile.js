//// utilisation de readfile : https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback
const fs = require('fs');

//Qu'est c e que j'ai en entrée : 
// console.log(process.argv);

// Récupèration du chemin de fichier à récupérer
// console.log(process.argv[2]);
//import de la méthode readfile "bonne pratique " => ne fonctionne pas pour l'exo
//import { readFile } from 'fs';

// v-- pour la bonne pratique avec le import, pas la peine de mettre le fs.
//                                   v--- data contient un buffer du contenue du fichier 
fs.readFile(process.argv[2], (err, data) => {
    if (err) throw err;
    let stringBufferContent = data.toString();
    let tabSentence = stringBufferContent.split('\n');
    console.log(tabSentence.length - 1);
});