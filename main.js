// MILESTONE 1: Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

const nomeCognomeEl = document.querySelector('.nomeCognome');
const kmDaPercorrereEl = document.querySelector('.kmDaPercorrere');
const ageEl = document.querySelector('.age');
const generaEl = document.querySelector('.genera');
const formEl = document.querySelector('form');
const nomeInUscitaEl = document.querySelector('.nomeInUscita');
const costoBigliettoEl = document.querySelector('.costoBiglietto');
const offertaEl = document.querySelector('.offerta');
const carrozzaEl = document.querySelector('.carrozza');
const codiceCpEl = document.querySelector('.codiceCp');


 formEl.addEventListener('submit', function(e){
    e.preventDefault()
   

    let km_price = 0.21;
    let totalPrice = Number(kmDaPercorrereEl.value) * km_price;
    let discount= 0;
    let etaPasseggero = Number(ageEl.value);
  
    if (etaPasseggero < 18) {
        discount = 0.2 * totalPrice;
    } else if (etaPasseggero > 65) {
        discount = 0.4 * totalPrice;
    }
    totalPrice -= discount;
    console.log(totalPrice.toFixed(2));

    //nome in uscita
    let exitName = nomeCognomeEl.value;
    nomeInUscitaEl.innerHTML += exitName + '<br>';
  
    //offerta
    let exitAge = ageEl.value
    if (exitAge < 18){
        offertaEl.innerHTML += 'Biglietto Ridotto<br>';

    }else if (exitAge < 65){
        offertaEl.innerHTML += 'Biglietto Standard<br>';
    }else {
        offertaEl.innerHTML += 'Biglietto Over<br>'
    }
    
    //carrozza
    function numeroCarrozza() {
        return Math.floor(Math.random() * 30) + 1;
    }
    carrozzaEl.innerHTML += 'Carrozza: ' + numeroCarrozza() + '<br>';
    
    //codice cp
    function codiceCpNumber() {
        return Math.floor(Math.random() * 300000) + 1;
    }
    codiceCpEl.innerHTML += 'Codice CP: ' + codiceCpNumber() + '<br>'; 
    
    //costo biglietto
    let exitPrice = totalPrice.valueOf();
    costoBigliettoEl.innerHTML += 'Costo Biglietto: €' + (exitPrice.toFixed(2)) + '<br>'; 

    

 })



 