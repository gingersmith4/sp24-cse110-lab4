/* Practicing writing and running JavaScript */
// run with $ node part2-practice.js

console.log("Hello"); //prints in the terminal

//create an object
let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
};

//prints the keys
for(car in statistics){
    console.log(car);
};

//prints key: value
for (property in statistics) {
    console.log(`${property}: ${statistics[property]}`);
};

//prints values
for (property in statistics) {
    console.log(`${statistics[property]}`);
};

function printNums () {
    console.log(1); 
    setTimeout (function() { console.log(2); }, 1000);
    setTimeout (function() { console.log(3); }, 0);
    console.log(4);
}
let answer = printNums();

/*
1
4
3
2
I'm surprised, I was expecting 1 3 4 2
If delay 0 is used it means execute "immediately", or more accurately, 
the next event cycle. https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
*/