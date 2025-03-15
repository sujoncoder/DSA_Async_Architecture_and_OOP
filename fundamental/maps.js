// MAPS ObJECT
const maps = new Map();
console.log(maps);
console.log(typeof maps);

// CREATING MAP
const myMap = new Map([
    ["name", "sujon"],
    ["age", 25],
    [300, "money"]
]);

myMap.set("name", "sheikh") // ignored
console.log("name", myMap.get("name")); // Output: "sujon"
console.log("has", myMap.has("name")); // Output: true
myMap.delete("age"); // Returns true
// myMap.clear(); // clear all data from myMap
console.log(myMap.size); // Output: 2
console.log(myMap);






const cache = new Map();
function expensiveOperation(input) {
    if (cache.has(input)) {
        return cache.get(input);
    }
    const result = input * 2; // Simulate expensive computation
    cache.set(input, result);
    return result;
}
console.log(expensiveOperation(5)); // Output: 10 (computed)
console.log(expensiveOperation(5)); // Output: 10 (cached)


// Summary
// Maps are used for storing key - value pairs, where keys can be of any type.

// Sets are used for storing unique values without keys.

// Both are iterable, preserve insertion order, and have similar methods like has(), delete (), and clear().

// Use Map when you need to associate keys with values, and use Set when you need to ensure uniqueness in a collection.