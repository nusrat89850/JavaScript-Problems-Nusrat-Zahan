/*Write a function that takes a string where ingredients are concatenated together 
without commas and returns an array of individual ingredients by splitting the string after each word. */

function splitString(a){
    var b=a.split(/(?=[A-Z])/);
    const lowercasedArray = b.map(word => word.toLowerCase());
    console.log(lowercasedArray);
}
splitString("TomatoesOnionsLettuce");