// MILESTONE 1: Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

nomeCognomeEl = document.querySelector('.nomeCognome');
kmDaPercorrereEl = document.querySelector('.kmDaPercorrere');
ageEl = document.querySelector('.age');
generaEl = document.querySelector('.genera')

 
generaEl.addEventListener('click', function() {
    let km_price = 0.21;
    let totalPrice = Number(kmDaPercorrereEl.value) * km_price;
    let discount= 0;
    let age = Number(ageEl.value);

    if (age < 18) {
        discount = 0.2 * totalPrice;
    } else if (age > 65) {
        discount = 0.4 * totalPrice;
    }
    totalPrice =- discount;
    console.log(totalPrice);
    
})
 