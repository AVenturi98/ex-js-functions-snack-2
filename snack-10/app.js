/**
 * Creare un throttler per limitare l’esecuzione di una funzione
    Scrivi una funzione creaThrottler che accetta una funzione e un tempo `limite`.

    Restituisce una nuova funzione che, quando chiamata ripetutamente, esegue l'operazione originale al massimo una volta ogni n millisecondi.
 */

function creaThrottler(funzioneDaLimitare, limite) {
    let ultimaEsecuzione = 0; // Memorizza il timestamp dell'ultima esecuzione

    return function (...args) {
        const adesso = Date.now(); // Ottieni il tempo attuale in millisecondi

        // Controlla se è passato abbastanza tempo dall'ultima esecuzione
        if (adesso - ultimaEsecuzione >= limite) {
            ultimaEsecuzione = adesso; // Aggiorna il timestamp
            funzioneDaLimitare.apply(this, args); // Esegui la funzione con i suoi argomenti e il contesto corretto
        }
    };
}

// Funzione da limitare
function stampaMessaggio() {
    console.log("Funzione eseguita a:", new Date().toLocaleTimeString());
    document.getElementById('text').innerHTML += `Nuovo testo <br />`
}

// Crea una versione limitata della funzione
const funzioneThrottlata = creaThrottler(stampaMessaggio, 2000); // 2 secondi

// Simula chiamata
document.getElementById('btn').addEventListener('click', funzioneThrottlata)
