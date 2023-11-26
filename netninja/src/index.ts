// Generics 101
// ---------------

function logAndReturnValue<T>(val: T): T {
	console.log(val);
	return val;
}

const resultNumber = logAndReturnValue<number>(1);
const resultString = logAndReturnValue<string>('hello');
const resultBool = logAndReturnValue<boolean>(true);

// example 2

function getRandomArrayValue<T>(values: T[]): T {
	const i = Math.floor(Math.random() * values.length);
	return values[i];
}

const array = getRandomArrayValue<string>(['apples', 'banana', 'potato']);
console.log(array);

// example 3

interface User {
	name: string;
	age: number;
}

const user: User[] = [
	{ name: 'Max', age: 30 },
	{ name: 'Manu', age: 25 },
	{ name: 'John', age: 24 },
	{ name: 'Conor', age: 20 },
];

const selectedUser = getRandomArrayValue<User>(user);
console.log(selectedUser)