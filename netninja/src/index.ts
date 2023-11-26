// Generic Interface
// -------------------

interface Collection<T> {
	data: T[];
	name: string;
}

const collectionOne: Collection<number> = {
	data: [1, 2, 3],
	name: 'collectionOne',
};

const collectionTwo: Collection<string> = {
	data: ['apple', 'banana', 'orange'],
	name: 'collectionOne',
};

interface User {
	name: string;
	age: number;
}

const collectionThree: Collection<User> = {
	data: [
		{
			name: 'John',
			age: 30,
		},
		{
			name: 'Conor',
			age: 19,
		},
		{
			name: 'Dion',
			age: 19,
		},
		{
			name: 'Jaylou',
			age: 21,
		},
	],
	name: 'collectionOne',
};

type dWords = 'driving' | 'death' | 'shit';

const collectionFour: Collection<dWords> = {
	data: ['death', 'driving', 'shit'],
	name: 'collectionOne',
};

function randomCollectionItem<T>(collection: Collection<T>): T {
	return collection.data[Math.floor(Math.random() * collection.data.length)];
}

const randomDataOne = randomCollectionItem(collectionOne);
const randomDataTwo = randomCollectionItem(collectionTwo);
const randomDataThree = randomCollectionItem(collectionThree);
const randomDataFour = randomCollectionItem(collectionFour);

console.log({randomDataOne, randomDataTwo, randomDataThree, randomDataFour});