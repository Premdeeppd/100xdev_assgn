/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
    // Your code here
    let temp = "";
    for(let i=0;i<str.length;i++){
      if(str[i] === " " || str[i]=== "!" || str[i]=== "?" || str[i]=== "," || str[i]=== "." || str[i]=== "'"){
        continue;
      }
      temp += str[i].toLowerCase();
    }
    let reverse = temp.split("").reverse().join("");
    if(temp === reverse){
      return true;
    }
    return false;
}

module.exports = isPalindrome;
