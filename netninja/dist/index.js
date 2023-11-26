"use strict";
// -----------------
// Generic Constraints
// -----------------
class DataCollection {
    constructor(data) {
        this.data = data;
    }
    loadOne() {
        const i = Math.floor(Math.random() * this.data.length);
        const output = this.data[i];
        console.log(output);
        return output;
    }
    loadAll() {
        console.log(this.data);
        return this.data;
    }
    add(value) {
        this.data.push(value);
        console.log(this.data);
        return this.data;
    }
}
const users = new DataCollection([
    {
        name: 'jlord',
        age: 10000,
        id: Math.floor(Math.random() * 1000),
    },
]);
