"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
// well shite
const paymentWriter = new index_1.CSVWriter(['id', 'amount', 'to', 'notes']);
paymentWriter.addRows([
    {
        id: 2,
        amount: 10.99,
        to: 'someones',
        notes: 'some notes',
    },
]);
paymentWriter.save('./data/payment.csv');
