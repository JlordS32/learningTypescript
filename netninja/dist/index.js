"use strict";
// UNION TYPES
function move(direction) {
    console.log(direction);
}
move('up');
move('shit'); // error
let someId;
someId = 10;
someId = '10';
someId = true; // error
let email = null;
const userOne = {
    id: 'audf-df3d-fdfv-343s',
    name: 'testUser',
    email: 'test@example.com',
};
function swapIdtype(id) {
    if (typeof id === 'string') {
        parseInt(id);
    }
    if (typeof id === 'number') {
        id.toString();
    }
    return id;
}
