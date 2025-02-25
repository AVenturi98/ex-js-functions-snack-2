/**
 * 🏆 Snack 6
    Crea un contatore automatico con setInterval
    Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.
 */

function creaContatoreAutomatico() {
    let counter = 0;

    const timer = setInterval(() => console.log(counter++), 1000);

    setTimeout(() => clearInterval(timer), 5000);
}

creaContatoreAutomatico()

