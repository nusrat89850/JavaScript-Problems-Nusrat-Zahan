/*Write a function to count how many unique ways the knight can 
reach the top of the stairs by taking 1, 2, or 3 steps at a time.*/

function findStep(n){
    if (n == 0)
        return 1;
    else if (n < 0)
        return 0;
    else
        return findStep(n - 3) + findStep(n - 2)
                            + findStep(n - 1);
}
let n = 4;
 console.log(findStep(n));