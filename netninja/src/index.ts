interface Payment {
	id: number;
	amount: number;
	to: string;
	notes: string;
}

type PaymentColumns = ('id' | 'amount' | 'to' | 'notes')[];

class CSVWriter {
	private csv: string;

	constructor(private columns: PaymentColumns) {
		this.csv = this.columns.join(',');
	}

	addRows(values: Payment[]) {
		let rows = values.map((v) => this.formatRow(v));

		this.csv += '\n' + rows.join('\n');

		console.log(this.csv);
	}

	private formatRow(p: Payment) {
		return this.columns.map((col) => p[col]).join(',');
	}

	printCsv() {
		console.log(this.csv);
	}
}

const writer = new CSVWriter(['id', 'amount', 'to', 'notes']);
writer.addRows([
	{ id: 1, amount: 100, to: 'John', notes: 'Payment' },
	{ id: 2, amount: 200, to: 'Jane', notes: 'Birthday Present' },
	{ id: 2, amount: 500, to: 'Mario', notes: 'Fee' },
	{ id: 2, amount: 2300, to: 'Bowser', notes: 'Borrowed Money' },
]);