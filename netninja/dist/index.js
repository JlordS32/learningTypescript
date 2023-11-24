"use strict";
// TUPLES
let person = ['Max', 22, true];
person[0] = 'John';
person[0] = 0; // error
console.log(person[0]);
// TUPLE EXAMPLES
let hsla;
hsla = [200, '100%', '50%', 1];
console.log(hsla);
let xy;
xy = [-94.7, 20.1];
console.log(xy);
function useCoords(xy) {
    return [xy[0], xy[1]];
}
const [lat, long] = useCoords(xy);
console.log(long);
console.log(lat);
// named tuples
let user;
user = ['Max', 30];
user = [3, 43];
console.log(user);
