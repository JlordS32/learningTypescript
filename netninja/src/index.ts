// -----------------
// Generic Classes
// -----------------

class DataCollection<T> {
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

	print(): void {
		console.log(this.data);
	}
}

interface User {
	name: string;
	age: number;
}

const user = [
	{
		name: 'John',
		age: 30,
	},
];

const collection = new DataCollection<User>(user);

collection.loadOne();
collection.loadAll();

const newUser = {
	name: 'John',
	age: 21,
};
collection.add(newUser);
