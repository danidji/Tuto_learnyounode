const fs = require('fs');

let path = process.argv[2]

//On récupère le contenue du fichier test.txt sous forme d'un objet buffer
const buffer = fs.readFileSync(`${path}`)
//On convertie le contenue du buffer en chaine de caractère

const str = buffer.toString();
//on sépare la chaine à chaque ligne dans un tableau
const lineTab = str.split('\n');

let lineNumber = 0;
// On compte le nb de ligne
lineTab.forEach(element => {
    lineNumber++;
})

console.log(lineNumber - 1)



