const [ak, dui, tin, ...rest] = [2, 3, 4, 5, 6, 6];
// console.log(ak)
// console.log(dui)
// console.log(tin)
// console.log(rest)

function resting(one, ...rest) {
    // console.log(one, rest)
};
resting(1, 2, 3, 4, 5);

const product = {
    name: "dell",
    price: 20000,
    madeIn: "usa"
};
const { name, ...details } = product
const newObj = { ...details };
// console.log(newObj)


const person = {
    name: "Sheikh",
    age: 25,
    isMarried: true,
    hoby: "tour",
    money: false
};

const { hoby, age, ...more } = person;
const detail = { more }
// console.log(detail)

const numbers = [10, 20, 30, 40];
const [, , ...extra] = numbers;
const newArr = [...extra]
// console.log(newArr)


function resto(one, two, ...resto) {
    let total = 0;
    for (const item of resto) {
        total = total + item
    }

    console.log(total / resto.length)
};
resto(1, 2, 3, 4, 5);