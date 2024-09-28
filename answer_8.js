// Write a function that takes a phrase as input and returns the words in reverse order.

function reverseWords(x) {
    return x.split(' ').reduce((reversed, word) => word + ' ' + reversed, '');
}

let x ="The dragon breathes fire";
console.log(reverseWords(x));