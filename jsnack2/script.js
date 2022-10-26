const firstWord = prompt("inserisci la prima parola");
const secondtWord = prompt("inserisci la prima parola");

if(firstWord.length < secondtWord.length ){
    console.log(firstWord)
    console.log(secondtWord)
}else if (firstWord.length > secondtWord.length) {
    console.log(secondtWord)
    console.log(firstWord)
}else("Le due parole sono uguali")

