// run with $ node part2-functions.js
// learning about callbacks
function modifyArray(array, callback) {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        newArr.push(callback(array[i]));
    }
    return newArr;
}

function doSomething(num) {
    return num * 2;
}

result = modifyArray([1,2,3], doSomething)
console.log(result)