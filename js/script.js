let priceTicket;
const priceForKm = 0.21;
const discountMinors = 0.20;
const discountSenior = 0.40;

// Chiedere chilometri da percorre al passeggero

const kilometers = prompt('Quante il numero di chilometri che deve percorre ?');

const age = prompt('Qual è la usa età ?');

// Controllo input

if (isNaN(kilometers) || isNaN(age)) {
    alert('ERORRE! Inserire valore valido');
}

//Trasformare input da stringa a numero
// Applicare prezzo del biglietto in base ai chilometri (0.21 € al km)

priceTicket = parseInt(kilometers) * priceForKm;

// Controllo età

if (age < 18) {
    // Sconto per minorenni
    priceTicket = priceTicket * (1 - discountMinors);
    alert(`Il prezzo del biglietto è ${priceTicket.toFixed(2)} € applicando lo sconto per i minorenni`);
} else if (age > 65) {
    // Sconto per over 65
    priceTicket = priceTicket * (1 - discountSenior);
    alert(`Il prezzo del biglietto è ${priceTicket.toFixed(2)} € applicando lo sconto per gli over 65`);
} else {
    // Nessuno sconto
    alert(`Il prezzo del biglietto è ${priceTicket.toFixed(2)} €`);
}
