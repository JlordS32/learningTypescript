"use strict";
// any type
let age;
let title;
age = 30;
age = false;
title = 25;
title = {
    hello: 'world',
};
console.log(age);
// note: don't use any type as much as possible
// any type in arrays
let names = [];
names.push(1);
names.push('hello');
names.push(false);
names.push([3, 2, 3]);
names.push([{ something: 'sdf', hello: 3, isTrue: true }]);
names.push({ any: 'sdf' });
console.log(names);
// function & any
function addTogether(value) {
    return value + value;
}
console.log(addTogether('sdf'));
