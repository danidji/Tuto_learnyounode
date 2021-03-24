let tab = process.argv;
let somme = 0;


for (let i = 2; i < tab.length; i++) {
    somme += parseInt(tab[i])
}

console.log(somme);