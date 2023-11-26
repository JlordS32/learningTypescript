"use strict";
// --------------------
// Intersection Type
// --------------------
function addIdToValue(val) {
    return Object.assign({ id: Math.random() }, val);
}
const post = addIdToValue({
    title: 'My Post',
    thumbsUp: 69,
});
console.log(Object.entries(post).map(([_, value]) => value).join('\n'));
