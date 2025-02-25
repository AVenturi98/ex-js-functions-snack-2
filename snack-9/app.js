/**
 * 🎯 Snack 9 (Bonus)
    Creare una funzione che esegue una sequenza di operazioni con ritardi
    Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo.

    Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo.
 */

const sequenzaOperazioni = (array = [], interval) => {

    array.forEach((e, i) => setTimeout(e, i * interval))
}

sequenzaOperazioni([
    () => console.log('Operazione 1'),
    () => console.log('Operazione 2'),
    () => console.log('Operazione 3')
], 2000)


