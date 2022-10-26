// Crea un array vuoto.
const list=[];
// Chiedi per 6 volte all’utente di inserire un numero,
for(let i = 0; i < 6; i++){
    const userNumber = Number(prompt("inserisci un numero"));
    if(userNumber % 2 !== 0){
        list.push(userNumber)
    }
}

console.log(list)
// se è dispari inseriscilo nell’array.