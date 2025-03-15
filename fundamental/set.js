// SET METHOD IN OBJECT
const set = new Set([1, 2, 3, 4, 4]); // duplicate value are ignored.
console.log(set); // Output: Set { 1, 2, 3, 4 }

const mySet = new Set();
// add new value in the myset object
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(4);
mySet.add(5);

// check exist value into mySet
console.log("has", mySet.has(2));
// deleteing value from mySet
console.log("deleting", mySet.delete(2));
// clear all value from mySet
// mySet.clear();

// itarable
mySet.forEach((value) => console.log("value", value));

// looping
for (const item of mySet.entries()) {
    console.log("entries", item)
};
console.log("size", mySet.size);

// make unique make new Set
const arrayy = [22, 33, 44, 55, 66, 44];
const makeUniqueValue = [...new Set(arrayy)];
console.log(makeUniqueValue);

console.log(mySet);

// Summary
// Maps are used for storing key - value pairs, where keys can be of any type.

// Sets are used for storing unique values without keys.

// Both are iterable, preserve insertion order, and have similar methods like has(), delete (), and clear().

// Use Map when you need to associate keys with values, and use Set when you need to ensure uniqueness in a collection.