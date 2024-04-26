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
