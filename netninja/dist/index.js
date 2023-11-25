"use strict";
// type guards
function swapIdType(id) {
    if (typeof id === 'string') {
        // can use string methods
        return parseInt(id);
    }
    else {
        // can use number methods and properties
        return `String: ${id.toString()}`;
    }
}
const idOne = swapIdType(1);
const idTwo = swapIdType('2');
console.log(idOne);
console.log(idTwo);
function logDetails(value) {
    if (value.type === 'user') {
        console.log(value.username);
    }
    if (value.type === 'person') {
        console.log(value.age);
    }
}
