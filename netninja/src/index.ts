// any type

let age: any;
let title: any;

age = 30;
age = false;

title = 25;
title = {
	hello: 'world',
};

console.log(age);

// note: don't use any type as much as possible

// any type in arrays

let names: any[] = [];

names.push(1);
names.push('hello');
names.push(false);
names.push([3, 2, 3]);
names.push([{ something: 'sdf', hello: 3, isTrue: true }]);
names.push({ any: 'sdf' });

console.log(names);

// function & any

function addTogether(value: any) {
	return value + value;
}

console.log(addTogether('sdf'))
