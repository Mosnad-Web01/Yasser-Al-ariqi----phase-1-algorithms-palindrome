function isPalindrome(word) {
  let reversedWord = word.split("").reverse().join("");
  if(reversedWord === word){
    return true
  }else {
    return false
  }
}




/* 
  Pass a text to the function
  split the text into an array
  reverse the array 
  join the array items into string
  compare the reversed word with the original one 
  if equal return true 
  else retun false
*/



// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
