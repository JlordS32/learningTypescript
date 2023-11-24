"use strict";
// --------
// arrays
// --------
let names = ['sdfsdf', 'sdfsd', 'sdf'];
let ages = [1, 1, 1, 1, 1];
let things = [1, true, 'hello'];
console.log(things);
// FUNCTIONS
// -----------
function addTwoNumbers(a, b) {
    return a + b;
}
// Arrow func
const subtractTwoNumbers = (a, b) => {
    return a - b;
};
console.log(addTwoNumbers(4, 5));
console.log(subtractTwoNumbers(4, 5));
function addAllNumbers(items) {
    return items.reduce((prev, next) => {
        return prev + next;
    }, 0);
}
console.log(addAllNumbers([1, 3, 3, 5, 3, 4]));
// RETURN TYPE INTERFERENCE
function formatGreeting(name, greeting) {
    return `${greeting}, ${name}`;
}
const result = formatGreeting('Jaylou', 'Hello');
console.log(result);
