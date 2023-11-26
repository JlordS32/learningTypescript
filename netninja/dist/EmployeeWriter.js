"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const employeeWriter = new _1.CSVWriter(['id', 'name', 'salary']);
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
