// --------
// arrays
// --------

let names: string[] = ['sdfsdf', 'sdfsd', 'sdf'];
let ages: number[] = [1, 1, 1, 1, 1];

let things = [1, true, 'hello'];

console.log(things);

console.log(names);

// OBJECT LITERALS

interface Person {
	name: string;
	age: number;
	[key: string]: any;
}

const person: Person = {
	name: 'John',
	age: 123,
	something: 243,
	theUnitedStatesofWhatever: {
		name: 'Something',
		age: '1000',
	},
};
