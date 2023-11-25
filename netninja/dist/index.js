"use strict";
// extending interfaces
const user = {
    id: 1,
    format() {
        return `This user has an id of ${this.id}`;
    },
};
const bill = {
    id: 2,
    amount: 50,
    server: 'mario',
    format() {
        return `This user has an id of ${this.id}`;
    },
};
function printFormatted(val) {
    console.log(val.format());
}
function printBill(val) {
    console.log('server: ', val.server);
    console.log(val.format());
}
printFormatted(user);
printFormatted(bill);
printBill(bill);
printBill(user); // error
