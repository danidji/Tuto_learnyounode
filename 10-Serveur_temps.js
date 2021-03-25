const net = require('net')

let port = process.argv[2];
let nowDate = new Date() // récupère la date du jour
let year = nowDate.getFullYear(); // récupère l'année de la date du jour
let month = nowDate.getMonth() + 1;//renvoie le mois de la date sachant que janvier = 0
let day = nowDate.getDate();
let hours = nowDate.getHours();
let minutes = nowDate.getMinutes()

// console.log(`${year}-${month}-${day} ${hours}:${minutes}`)
// définir sur qu'elle event on écoute le démarrage sur serveur net

//Ressort le format date avec 2 chiffre si <2
function formatDate(nb) {
    return nb < 10 ? nb = `0${nb}` : nb
}

// voir doc : https://dustinpfister.github.io/2019/07/18/nodejs-net/
const server = net.createServer()

server.on('connection', (socket) => {

    //Affichage de la date au format voulu
    let data = `${year}-${formatDate(month)}-${formatDate(day)} ${formatDate(hours)}:${formatDate(minutes)}\n`;

    socket.write(data);
    socket.end()
})

server.listen(port)

