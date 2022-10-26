// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

const iscritti = ["marco", "luca", "paolo"];
const nomeUtente = prompt("inserisci il tuo nome")

let message= "non trovato"

for( let i=0; i < iscritti.length; i++){ 
    
    if(iscritti[i] === nomeUtente){
        message= ("trovato")
    }
}

if(message === "trovato"){
    alert("il tuo nome è sulla lista")
}else{
    alert("il tuo nome non è sulla lista")
}