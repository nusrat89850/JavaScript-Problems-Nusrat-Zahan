/*Write a function that checks if a number is a perfect square. If it is, 
return the dragon’s age; otherwise, return "Try again!". */

function square(n) {
    if(n > 0 && Math.sqrt(n) % 1 === 0){
        console.log(n);
    }
    else {
        console.log("Try again!")
    }
}
square(49);