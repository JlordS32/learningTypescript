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
    delete(id) {
        const filteredData = (this.data = this.data.filter((x) => x.id !== id));
        this.data = filteredData;
    }
}
const users = new DataCollection([
    {
        name: 'jlord',
        age: 10000,
        id: 1,
    },
    {
        name: 'zlord',
        age: 10000,
        id: 2,
    },
]);
users.loadAll();
users.delete(2);
users.loadAll();
