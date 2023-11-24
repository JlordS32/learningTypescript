// --------
// arrays
// --------

let names: string[] = ['sdfsdf', 'sdfsd', 'sdf'];
let ages: number[] = [1, 1, 1, 1, 1];

let things = [1, true, 'hello'];

console.log(things);

// FUNCTIONS
// -----------

function addTwoNumbers(a: number, b: number): number {
	return a + b;
}

// Arrow func

const subtractTwoNumbers = (a: number, b: number): number => {
	return a - b;
};

console.log(addTwoNumbers(4, 5));
console.log(subtractTwoNumbers(4, 5));

function addAllNumbers(items: number[]): number {
	return items.reduce((prev, next) => {
		return prev + next;
	}, 0);
}

console.log(addAllNumbers([1, 3, 3, 5, 3, 4]));

// RETURN TYPE INTERFERENCE

function formatGreeting(name: string, greeting: string): string {
	return `${greeting}, ${name}`;
}

const result = formatGreeting('Jaylou', 'Hello');

console.log(result);
