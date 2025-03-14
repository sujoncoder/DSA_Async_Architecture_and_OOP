// CLONING WITH ARRAY
const numbers = [1, 2, 3, 4, 5, [6, 7]];

const arrayClone = numbers;

console.log("reference", arrayClone === numbers); // true

const spredArray = [...numbers];
console.log("reference", spredArray === numbers) // false

numbers[5][0] = 66;
console.log("numbers", numbers);
console.log("spredArray", spredArray);


const sliceArray = numbers.slice();
sliceArray[5][0] = 666;
console.log("sliceArray", sliceArray);
console.log("reference", sliceArray === numbers) // false
console.log("numbers", numbers);


// DEEP COPY USING JSON STRINGIFY AND JSON PARSE.
const jsonString = JSON.stringify(numbers);
console.log("jsonString:", jsonString);
console.log("jsonString:", numbers === jsonString);
const parseArray = JSON.parse(jsonString);
console.log("parseArray:", parseArray);
console.log("parseArray:", parseArray === numbers);
console.log("parseArray:", parseArray === jsonString);

parseArray[5][0] = 100;
console.log("parseArray:", parseArray);
console.log(numbers)

// DEEP COPY USING structuredClone
const structuredCloneArray = structuredClone(numbers);
console.log("structuredCloneArray", structuredCloneArray);
console.log("structuredCloneArray", structuredCloneArray === numbers);
structuredCloneArray[5][0] = 123;
console.log("structuredCloneArray", structuredCloneArray);
console.log(numbers);
