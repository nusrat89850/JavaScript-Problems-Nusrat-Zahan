/* Write a function that takes an array of numbers representing map fragment IDs and returns the array sorted in ascending order, 
so the pirate can see the correct order of the map. */

function sortAscending(data_A, data_B)
{
    return (data_A - data_B);
}
var array =[9, 10, 21, 46, 19, 11];
console.log(array.sort(sortAscending));