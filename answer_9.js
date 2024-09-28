/*Write a function that takes two arrays of items and returns one array containing all unique 
items from both inventories. */

let arr1=["sword", "shield", "potion"];
let arr2=["potion", "ring", "shield"];

var arr_m = arr1.concat(arr2);

function removeDuplicates(arr_m) {
    let unique = [];
    for(i=0; i < arr_m.length; i++){
        if(unique.indexOf(arr_m[i]) === -1) {
            unique.push(arr_m[i]);
        }
    }
    return unique;
}
console.log(removeDuplicates(arr_m));