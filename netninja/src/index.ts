// UNION TYPES

type Direction = 'left' | 'right' | 'up' | 'down';

function move(direction: Direction) {
	console.log(direction);
}

move('up');
move('shit'); // error

let someId: number | string;

someId = 10;
someId = '10';
someId = true; // error

type Email = string | null;
type ID = string | number | null;
type User = {
   id: ID;
	name: string;
	email: Email;
};

let email: Email = null;

const userOne: User = {
   id: 'audf-df3d-fdfv-343s',
	name: 'testUser',
	email: 'test@example.com',
};

function swapIdtype(id: ID): ID {

   if (typeof id === 'string') {
      parseInt(id);
   }

   if (typeof id === 'number') {
      id.toString();
   }

   return id;
}