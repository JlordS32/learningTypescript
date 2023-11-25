// extending interfaces

interface HasFormatter {
	format(): string;
}

interface Bill extends HasFormatter {
	id: string | number;
	amount: number;
	server: string;
}

const user = {
	id: 1,
	format(): string {
		return `This user has an id of ${this.id}`;
	},
};

const bill = {
	id: 2,
	amount: 50,
	server: 'mario',
	format(): string {
		return `This user has an id of ${this.id}`;
	},
};

function printFormatted(val: HasFormatter): void {
	console.log(val.format());
}

function printBill(val: Bill): void {
	console.log('server: ', val.server);
	console.log(val.format());
}

printFormatted(user);
printFormatted(bill);
printBill(bill);
printBill(user); // error
