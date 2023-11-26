"use strict";
// Generic Interface
// -------------------
const collectionOne = {
    data: [1, 2, 3],
    name: 'collectionOne',
};
const collectionTwo = {
    data: ['apple', 'banana', 'orange'],
    name: 'collectionOne',
};
const collectionThree = {
    data: [
        {
            name: 'John',
            age: 30,
        },
        {
            name: 'Conor',
            age: 19,
        },
        {
            name: 'Dion',
            age: 19,
        },
        {
            name: 'Jaylou',
            age: 21,
        },
    ],
    name: 'collectionOne',
};
const collectionFour = {
    data: ['death', 'driving', 'shit'],
    name: 'collectionOne',
};
function randomCollectionItem(collection) {
    return collection.data[Math.floor(Math.random() * collection.data.length)];
}
const randomDataOne = randomCollectionItem(collectionOne);
const randomDataTwo = randomCollectionItem(collectionTwo);
const randomDataThree = randomCollectionItem(collectionThree);
const randomDataFour = randomCollectionItem(collectionFour);
console.log({ randomDataOne, randomDataTwo, randomDataThree, randomDataFour });
