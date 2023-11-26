"use strict";
// -----------------
// Generic Classes
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
    print() {
        console.log(this.data);
    }
}
const user = [
    {
        name: 'John',
        age: 30,
    },
];
const collection = new DataCollection(user);
collection.loadOne();
collection.loadAll();
const newUser = {
    name: 'John',
    age: 21,
};
collection.add(newUser);
