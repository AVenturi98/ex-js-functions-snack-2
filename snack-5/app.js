/**
 * 🏆 Snack 5
    Crea una funzione stampaOgniSecondo con setInterval.
    Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

    Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.
 */

function stampaOgniSecondo(messaggio, ms) {
    const stampa = setInterval(() => console.log(messaggio), ms);
    setTimeout(() => clearInterval(stampa), 5000)
}

stampaOgniSecondo('Stampa messaggio', 1000)
