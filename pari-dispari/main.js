/* 
 TRACCIA
 L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
*/

// chiediamo all'utente di scegliere tra pari e dispari - userChoice = prompt(...)

const userChoice = prompt('Scegli tra pari o dispari');

// chiediamo di selezionare un numero da 1 a 5 - userNumb = prompt(...)

const userNumb = Number(prompt('Scegli un numero da 1 a 5'))


// generiamo un numero randomico per il pc - pcNumb = Math.random

// const pcNumb = Math.ceil(Math.random() * 5)

function getRandomNumbr(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const pcNumb = getRandomNumbr(1, 5)
console.log(pcNumb);


alert(` il tuo numero : ${userNumb}
  numero del pc : ${pcNumb}`)

// sommiamo i due numeri 
// const sum = pcNumb + userNumb

/*
// stabiliamo se la somma sia pari o dispari  e dichiariamo il vincitore
if (sum % 2 === 0 && userChoice == 'pari'){
  console.log('you win');  
} else if (sum % 2 !== 0 && userChoice == 'dispari'){
  console.log('you win');
  
} else {
  console.log('You lose :( try again');
  
}
 */

function isEven(num1, num2) {

  const sum = num1 + num2

  if (sum % 2 === 0) {
    return true
  }
  return false
}

if (isEven(pcNumb, userNumb) && userChoice == 'pari') {
  alert('yuo win!');
} else if (isEven(pcNumb, userNumb) == false && userChoice == 'dispari') {
  alert('yuo win!');

} else {
  alert('You lose :( try again');

}
