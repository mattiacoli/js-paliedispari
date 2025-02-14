/* 
 TRACCIA
  Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma 
*/

// chiedere all'utente di inserire una parola - userWord = prompt(...)

let userWord = 'abba';
console.log(userWord.length);



// controllare la prima meta` della parola sia uguale alla seconda - loop for
for (let i = 0; i < userWord.length / 2; i++) {
  const firstHalfWord = userWord[i];

  if (firstHalfWord !== userWord[userWord.length - 1 - i]) {
    console.log('It is not a palindrome');
  } else {
    console.log('it is palindrome');
    
  }
  
}
