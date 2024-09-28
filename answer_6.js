/*Write a function that takes the number of knights as input and returns the total number 
of gold coins needed to distribute in this pattern. */

function totalPath(n){
    var sum=0;
    for(var i=1;i<=n;i++){
        sum =sum+i;
    }
    console.log(sum);
}
totalPath(5);