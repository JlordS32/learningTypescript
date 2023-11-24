// TUPLES

let person: [string, number, boolean] = ['Max', 22, true];

person[0] = 'John';

person[0] = 0; // error

console.log(person[0]);

// TUPLE EXAMPLES

let hsla: [number, string, string, number];
hsla = [200, '100%', '50%', 1];

console.log(hsla);

let xy: [number, number];
xy = [-94.7, 20.1];

console.log(xy);

function useCoords(xy: [x: number, y: number]): [number, number] {
	return [xy[0], xy[1]];
}

const [lat, long] = useCoords(xy);

console.log(long);
console.log(lat);

// named tuples

let user: [name: string, age: number];

user = ['Max', 30];
user = [3, 43];
console.log(user);
