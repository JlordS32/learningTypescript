import { CSVWriter } from '.';

interface Employee {
	id: number;
	name: string;
	salary: number;
}

const employeeWriter = new CSVWriter<Employee>(['id', 'name', 'salary']);

employeeWriter.addRows([
	{
		id: 2,
		name: 'John Doe',
		salary: 100000,
	},
	{
		id: 3,
		name: 'Elon Musk',
		salary: 60000,
	},
	{
		id: 4,
		name: 'Jeff Bezos',
		salary: 90000,
	},
	{
		id: 5,
		name: 'Bill Gates',
		salary: 10000000,
	},
]);

employeeWriter.save('data/employee.csv');
