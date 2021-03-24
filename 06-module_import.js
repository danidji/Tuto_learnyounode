///// exemple import module avec callback
// importDeMesDonnees(1, 2, (err, result) => {
//     if (err) { // Best practice to handle your errors
//         console.log(err)
//     } else { // Implement the logic, what you want to do once you recieve the response back 
//         console.log(result)
//     }
// })

const myModule = require('./06-module_export');

let cheminDossier = process.argv[2];
let extensionATester = process.argv[3];
// On rajoute le . devant l'extension à tester


// On définit ce que va réaliser la fonction monCallback, qui est en paramètre de la fonction importé dans myModule
monCallback = (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.join('\n'))
}

myModule(cheminDossier, extensionATester, monCallback)


