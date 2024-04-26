// run with $ node part2-question16.js

/* Given the above Object, write a for...in loop that will iterate 
through it and print out the value of the property if the property 
starts with the letter r, or if the value of that property is an odd number.  */

//create an object
let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2,
};

//prints key: value
for (property in statistics) {
    //print out the value of the property if the property  starts with the letter r
    let carName = property;
    if(carName[0] == "r"){
        console.log(`${statistics[property]}`);
    
    // or if the value of that property is an odd number
    } else if(statistics[property] % 2 != 0){
        // from chatgpt: ${} is called expression interpolation syntax. 
        // enclose an expression inside ${}, it gets evaluated, and converted to a string 
        // and inserted into the template string
        // ex. `The value is: ${statistics[property]}`
        console.log(`${statistics[property]}`);
    }
};
