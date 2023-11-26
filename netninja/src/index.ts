// -----------------
// Generic Constraints
// -----------------

interface HasID {
	id: number;
}

class DataCollection<T extends HasID> {
	constructor(private data: T[]) {}

	loadOne(): T {
		const i = Math.floor(Math.random() * this.data.length);
		const output = this.data[i];

		console.log(output);
		return output;
	}
	loadAll(): T[] {
		console.log(this.data);
		return this.data;
	}
	add(value: T): T[] {
		this.data.push(value);
		console.log(this.data);
		return this.data;
	}
}

interface User {
	name: string;
	age: number;
	id: number;
}

const users = new DataCollection<User>([
	{
		name: 'jlord',
		age: 10000,
		id: Math.floor(Math.random() * 1000),
	},
]);
