// function signatures

type Calculator = (numberOne: number, numTwo: number) => number;

function add(a: number, b: number) {
	return a + b;
}

function multiply(a: number, b: number) {
	return a * b;
}

function square(a: number): number {
	return a * a;
}

function addThreeNumber(a: number, b: number, c: number): number {
	return a + b + c;
}
function joinNumbers(a: number, b: number) {
	return `${a}${b}`;
}

let calcs: Calculator[] = [];

calcs.push(add);
calcs.push(multiply);
calcs.push(square);
calcs.push(joinNumbers); // error
calcs.push(addThreeNumber); // error

// function signatures on interfaces
// ---------------------------------------

interface HasArea {
	name: string;
	calcArea: (length: number) => number;
}

const shapeOne: HasArea = {
	name: 'square',
	calcArea: (a) => a * a,
};

const shapeTwo: HasArea = {
	name: 'circle',
	calcArea: (r: number) => {
		return Math.PI * r ** 2;
	},
};

console.log(shapeOne.calcArea(10));
console.log(shapeTwo.calcArea(10));
