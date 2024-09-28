// Write a function that removes duplicate items from a shopping list (array of strings).

let arr= ["rum", "gold", "parrot food", "rum", "gold", "map"];
    function removeDuplicates(arr) {
        let unique = [];
        for(i=0; i < arr.length; i++){
            if(unique.indexOf(arr[i]) === -1) {
                unique.push(arr[i]);
            }
        }
        return unique;
    }
    console.log(removeDuplicates(arr));