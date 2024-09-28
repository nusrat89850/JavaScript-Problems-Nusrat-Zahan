/*Write a function that takes a sentence as input, where each word is written backward, 
and returns the sentence with words spelled correctly (forward).*/
function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"    "w","o","r","l","d"];
  
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"    "d","l","r","o","d"]
  
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); 
    // "dlrow olleh"
  
    //Step 4. reverse words forward
    reverseWord=joinArray.split(' ').reduce((reversed, word) => word + ' ' + reversed, '');
    console.log(reverseWord);
  }
  reverseString("Hello World");