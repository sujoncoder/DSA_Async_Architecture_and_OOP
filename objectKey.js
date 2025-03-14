const phone = {
    name: "Nokia",
    price: "20000",
    madeIn: "Bangladesh",
    camera: "20px"
};
const keys = Object.keys(phone)
const values = Object.values(phone)
const hasPrice = keys.includes("price");


// console.log(hasPrice)
// console.log("key", keys)
// console.log("values", values)

if ("email" in phone) {
    // console.log("yes")
} else {
    // console.log("no")
};


if (phone.hasOwnProperty("email")) {
    // console.log("yes")
} else {
    // console.log("not")
};

const entries = Object.entries(phone);
// console.log(entries)


const book = {
    title: "Js dev",
    author: "Jhankar mahabub",
    category: "programming",
};

const keyes = Object.keys(book);
// console.log(keyes)
const valuu = Object.values(book);
// console.log(valuu)

const hasAuthor = keyes.includes("author");
// console.log(hasAuthor);

for (const k in book) {
    const value = book[k]
    // console.log(k, value)
};

const keys1 = Object.keys(phone);
// console.log(keys1)
for (const ke of keys1) {
    // console.log(ke, phone[ke])
};



const val = Object.values(phone);
// console.log(val)
for (const k of val) {
    // console.log(k)
};

for (const k in phone) {
    const val2 = phone[k]
    // console.log(val2)
};


const numbers = {
    a: 10,
    b: 20,
    c: 30,
    d: 40
};

let total = 0;
for (const man in numbers) {
    total += numbers[man]
}
// console.log(total)

const person = {
    name: "sujon",
    age: 25,
    isMarried: true
};
Object.seal(person)
person.isMarried = false;
console.log(person);