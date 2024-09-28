/*Write a function that takes an array of numbers where every second number is null 
(words not in correct order) and replace those null values with the average of the two surrounding numbers.*/

var seriesData = [10,null,20,null,30]

seriesData.forEach(function(value, index){
    if ( value === null ) {
        var prev = seriesData[index - 1];
        var next = seriesData[index + 1];
        seriesData[index] = (prev + next) / 2;
    }
});
console.log(seriesData);