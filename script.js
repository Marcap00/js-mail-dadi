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

// ========================================================================= //

/* 
Inventa una lista di email autorizzate
Chiedi all’utente la sua email, con un piccolo form.
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/

/* 
1- Recuperiamo gli elementi dal DOM
2- Mi preparo l'array con la lista di email autorizzate
3- Recuperiamo il valore dell'input dell'utente
4- Eseguiamo il controllo
5- Stampiamo in pagina il risultato del controllo
*/

// # Fase di preparazione
const form = document.querySelector('form');
console.log(form);
const userEmail = document.getElementById('user-email');
console.log(userEmail);
const buttonForm = document.getElementById('form-btn');
console.log(buttonForm);
const textResult = document.getElementById('text');
console.log(textResult);

// Prepariamo la lista di email autorizzate
const emailsList = [
    'marcorossi@gmail.com',
    'robertorossi@gmail.com',
    'giusepperossi@gmail.com',
    'alessandrorossi@gmail.com',
    'mariorossi@gmail.com',
    'fabiorossi@gmail.com',
    'damianorossi@gmail.com',
    'francescorossi@gmail.com',
    'francorossi@gmail.com',
]
console.table(emailsList);
 

// # Fase di gestione eventi
buttonForm.addEventListener('click', function() {
    const userEmailValue = (userEmail.value);
    console.log(userEmailValue);
    // ! VALIDAZIONE
    if (!userEmailValue) {
        alert('Non hai inserito nessun carattere, inserisci una email');
    } else if (!isNaN(userEmailValue)) {
        alert("Hai inserito solo caratteri numerici, riprova");
    } else {
        textResult.innerText = 'La tua email non è autorizzata';
        textResult.className = 'text-danger';
        for (let i = 0; i < emailsList.length; i++) {
            const email = emailsList[i];
            
            const isIncluded = userEmailValue === email;
            if (isIncluded) {
                textResult.innerText = 'La tua email è autorizzata';
                textResult.className = 'text-success';
            }
        }
        form.reset();
    }
    })
    
    



