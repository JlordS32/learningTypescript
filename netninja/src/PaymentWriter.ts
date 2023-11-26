import { CSVWriter } from "./index";

interface Payment {
	id: number;
	amount: number;
	to: string;
	notes: string;
}

// well shite

const paymentWriter = new CSVWriter<Payment>(['id', 'amount', 'to', 'notes']);

paymentWriter.addRows([
	{
		id: 2,
		amount: 10.99,
		to: 'someones',
		notes: 'some notes',
	},
]);

paymentWriter.save('./data/payment.csv');