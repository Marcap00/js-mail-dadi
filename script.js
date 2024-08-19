/* 
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampiamo in pagina i due tiri e il risultato
*/

/* 
1- Recuperiamo dal DOM gli elementi
2- Mettiamo in ascolto sugli eventi il bottone con il "click"
3- Generiamo i numeri random
4- Stabiliamo il vincitore
5- Stampiamo in pagina il risultato
*/

// # Fase di preparazione
// Recuperiamo dal DOM gli elementi
const userNumbField = document.getElementById('user-number');
console.log(userNumbField);

const cpuNumbField = document.getElementById('cpu-number');
console.log(cpuNumbField);

const result = document.getElementById('result');
console.log(result);

const button = document.getElementById('cta-btn');
console.log(button);

let userNumber = 0;
let cpuNumber = 0;

// # Fase di gestione eventi
// Mettiamo in ascolto il bottone sugli eventi
button.addEventListener('click', function() {
    userNumber = Math.floor((Math.random() * 6) + 1);
    cpuNumber = Math.floor((Math.random() * 6) + 1);
    userNumbField.innerText = userNumber;
    cpuNumbField.innerText = cpuNumber;

    result.innerText = 'Pareggio!';
    result.className = 'text-secondary'
    
    if(userNumber < cpuNumber) {
        result.innerText = 'Hai perso!';
        result.className = 'text-danger';
    } else if(userNumber > cpuNumber) {
        result.innerText = 'Hai vinto!';
        result.className = 'text-success';
    }
})

