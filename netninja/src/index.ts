// TYPE ALIASES

// ex. 1

type Rgb = [r: number, g: number, b: number];

function RandomColor(): Rgb {
	const r = Math.floor(Math.random() * 255);
	const g = Math.floor(Math.random() * 255);
	const b = Math.floor(Math.random() * 255);

	return [r, g, b];
}

const randomColor = RandomColor();

console.log(randomColor);

// Object literal

type User = {
	name: string;
	age: number;
};

const user: User[] = [
	{
		name: 'John',
		age: 24,
	},
];

function formatUser(user: User): void {
	console.log(`${user.name} is ${user.age} years old`);
}

formatUser(user[0]);
formatUser({name: 'Jaylou', age: 21})
