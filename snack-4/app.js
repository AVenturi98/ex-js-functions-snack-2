/**
 * 🏆 Snack 4
    Crea un generatore di funzioni creaTimer
    Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".
 */

const endTime = () => console.log('Tempo Scaduto!')

const creaTimer = (ms) => {
    return setTimeout(endTime, ms)
}

creaTimer(2000)

