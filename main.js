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
    totalPrice - discount;
    console.log(totalPrice.toFixed(2));

    //nome in uscita
    let exitName = nomeCognomeEl.value;
    nomeInUscitaEl.append(exitName)
  
    //offerta
    let exitAge = ageEl.value
    if (exitAge < 18){
        offertaEl.textContent = 'Biglietto Ridotto'

    }else if (exitAge < 65){
        offertaEl.textContent = 'Biglietto Standard'
    }else {
        offertaEl.textContent = 'Biglietto Over'
    }
    
    //carrozza
    function numeroCarrozza() {
        return Math.floor(Math.random() * 30) + 1;
    }
    carrozzaEl.append(numeroCarrozza())
    //codice cp
    
    //costo biglietto
    let exitPrice = totalPrice.valueOf();
    costoBigliettoEl.append(exitPrice);

    

 })



 