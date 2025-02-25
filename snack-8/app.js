/**
 * 🎯 Snack 8 (Bonus)
    Crea una funzione che simula un conto alla rovescia
    Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.
 */


/**
 * 
 * @param {second} countStart 
 * @param {*String} messInit 
 * @param {*ms for setInterval} interval 
 * @param {*ms for setTimeout to clearInterval} endTime 
 * @param {*String} messStop 
 */
const contoAllaRovescia = (countStart = Number, messInit = String, interval = Number, endTime = Number, messStop = String) => {
    let counter = countStart;

    setTimeout(() => console.log(messInit), 1000);

    const printed = setInterval(() => console.log(counter--), interval);

    setTimeout(() => {
        clearInterval(printed);
        console.log(messStop)
    }, endTime)
}

contoAllaRovescia(5, 'Partenza', 1000, 5000, 'Fine')