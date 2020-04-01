/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
The input will be a lowercase string with no spaces.
Good luck! 
*/

function capitalize(s){
  let arrS = s.split('');
  let oddArray = [];
  
  oddArray.push(arrS[0]);
  arrS[0] = arrS[0].toUpperCase();
  
  for (let i=0; i < arrS.length; i++) {
    if (i % 2 === 0) {
    oddArray.push(arrS[i]);
    arrS[i] = arrS[i].toUpperCase();
    } else {
      oddArray[i] = arrS[i].toUpperCase();
    }
  }
  
  let sEven = arrS.join('');
  let sOdd = oddArray.join('');
  
  return [sEven, sOdd];
};
