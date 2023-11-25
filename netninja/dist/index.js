"use strict";
// reusable interfaces
const something = {
    quantity: 1,
};
function printQuantity(item) {
    console.log(`the quantity of the item is ${item.quantity}`);
}
const fruit = {
    name: 'mango',
    quantity: 50,
};
const vehicle = {
    name: 'car',
    quantity: 3,
};
const person = {
    name: 'john',
    age: 40,
};
printQuantity(fruit);
printQuantity(vehicle);
printQuantity(person);
