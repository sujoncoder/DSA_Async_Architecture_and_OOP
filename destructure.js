// ARRAY DESTRUCTURE
function added(a, b) {
    return [a * 3, b * 3]
}
const res = added(2, 4);
console.log(res)

const [ak, dui] = added(2, 5);
console.log("ak", ak, dui)


// FUNCTION DESTRUCTURE
function funcDes({ name, age }) {
    console.log(`Name is ${name} and her age is ${age}`)
}
funcDes({ name: "sujon", age: 25 })

// OBJECT DESTRUCURING
const person = {
    name: "sujon",
    age: 250,
    isMarried: false
}

const { name, age: personAge, isMarried } = person;
console.log(personAge)

// ARRAY DESTRUCURING AND SKIPPING
const numbers = [2, 4, 6, 12, 34];

const [first, , third, tin] = numbers;
console.log(third)