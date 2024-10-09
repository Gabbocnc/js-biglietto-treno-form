// MILESTONE 1: Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

const nomeCognomeEl = document.querySelector('.nomeCognome');
const kmDaPercorrereEl = document.querySelector('.kmDaPercorrere');
const ageEl = document.querySelector('.age');
const generaEl = document.querySelector('.genera');
const formEl = document.querySelector('form');

 
generaEl.addEventListener('click', function() {
    let km_price = 0.21;
    let totalPrice = Number(kmDaPercorrereEl.value) * km_price;
    let discount= 0;
    generaEl = Number(generaEl.value)

    if (ageEl < 18) {
        discount = 0.2 * totalPrice;
    } else if (ageEl > 65) {
        discount = 0.4 * totalPrice;
    }
    totalPrice - discount;
    console.log(totalPrice.toFixed(2));
    
})


 formEl.addEventListener('submit', function(e){
    e.preventDefault()
 })




 