"use strict";
// Generics 101
// ---------------
function logAndReturnValue(val) {
    console.log(val);
    return val;
}
const resultNumber = logAndReturnValue(1);
const resultString = logAndReturnValue('hello');
const resultBool = logAndReturnValue(true);
// example 2
function getRandomArrayValue(values) {
    const i = Math.floor(Math.random() * values.length);
    return values[i];
}
const array = getRandomArrayValue(['apples', 'banana', 'potato']);
console.log(array);
const user = [
    { name: 'Max', age: 30 },
    { name: 'Manu', age: 25 },
    { name: 'John', age: 24 },
    { name: 'Conor', age: 20 },
];
const selectedUser = getRandomArrayValue(user);
console.log(selectedUser);
