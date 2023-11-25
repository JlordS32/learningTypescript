"use strict";
// function signatures
function add(a, b) {
    return a + b;
}
function multiply(a, b) {
    return a * b;
}
function square(a) {
    return a * a;
}
function addThreeNumber(a, b, c) {
    return a + b + c;
}
function joinNumbers(a, b) {
    return `${a}${b}`;
}
let calcs = [];
calcs.push(add);
calcs.push(multiply);
calcs.push(square);
calcs.push(joinNumbers); // error
calcs.push(addThreeNumber); // error
const shapeOne = {
    name: 'square',
    calcArea: (a) => a * a,
};
const shapeTwo = {
    name: 'circle',
    calcArea: (r) => {
        return Math.PI * r ** 2;
    },
};
console.log(shapeOne.calcArea(10));
console.log(shapeTwo.calcArea(10));
