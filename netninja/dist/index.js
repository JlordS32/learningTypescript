"use strict";
// TYPE ALIASES
function RandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
const randomColor = RandomColor();
console.log(randomColor);
const user = [
    {
        name: 'John',
        age: 24,
    },
];
function formatUser(user) {
    console.log(`${user.name} is ${user.age} years old`);
}
formatUser(user[0]);
formatUser({ name: 'Jaylou', age: 21 });
