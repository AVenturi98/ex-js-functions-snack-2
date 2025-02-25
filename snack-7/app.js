/**
 * 🏆 Snack 7
    Crea una funzione che ferma un timer dopo un certo tempo
    Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.
 */

const eseguiEferma = (messaggio, init, stop) => {

    const printMessage = setInterval(() => console.log(messaggio), init);

    setTimeout(() => clearInterval(printMessage), stop)
}

eseguiEferma('Stampo messaggio', 1000, 5000)

