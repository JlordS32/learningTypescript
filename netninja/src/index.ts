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

	delete(id: number): void {
		const filteredData = (this.data = this.data.filter((x) => x.id !== id));

		this.data = filteredData;
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
		id: 1,
	},
	{
		name: 'zlord',
		age: 10000,
		id: 2,
	},
]);

users.loadAll();
users.delete(2);
users.loadAll();
