/* 
 TRACCIA
  Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma 
*/

// chiedere all'utente di inserire una parola - userWord = prompt(...)

let userWord = prompt('write a word')




/* // controllare la prima meta` della parola sia uguale alla seconda - loop for
for (let i = 0; i < userWord.length / 2; i++) {
  const firstHalfWord = userWord[i];

  if (firstHalfWord !== userWord[userWord.length - 1 - i]) {
    console.log('It is not a palindrome');
  } else {
    console.log('it is palindrome');
    
  }
  
} */

// Creare una funzione

function isPalidrome(word) {
  // controllare se la prima meta` della parola corrisponde alla seconda
  const wordLenght = word.length

  for (let i = 0; i < wordLenght / 2; i++) {
    const firstHalfWord = word[i];

    if (firstHalfWord !== word[wordLenght - 1 - i]) {
      return 'It is not a palindrome';
    }
    return 'It is a palindrome';
  }
}

// dare un ritorno sul risultato
const result = isPalidrome(userWord)


alert(`your word : "${userWord}" ${result}`);


