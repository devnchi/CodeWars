/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/


function reverseWords(str) {
  let reversedStr = '';
  let reversedWord = '';
  for (let i = 0; i < str.length; i++) {
    const character = str[i];    
    if (character !== ' ') {
      reversedWord = character + reversedWord;
    } else {
      reversedStr += reversedWord + ' ';
      reversedWord = '';
    }
  }
  return reversedStr + reversedWord;
}
