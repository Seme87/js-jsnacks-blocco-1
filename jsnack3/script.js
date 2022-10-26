// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
let tot= 0;

for(let i = 1; i<10; i++){
const request = Number(prompt("inserisci un numero"))
    console.log(request);
    tot += request
}

console.log(`"il totale è:`, ${tot})