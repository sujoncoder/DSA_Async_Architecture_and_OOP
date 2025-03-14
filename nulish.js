const x = null;
console.log(x ?? "foo")

const village = {
    name: "sujon",
    age: 25,
    address: {
        city: "magura"
    }
};

console.log(village?.address?.town ?? "homeless");

const product = {
    name: "janina",
    discount: 0
};

console.log(product?.stock ?? 0)
console.log(product?.discount === 0 && 10)






// logical and
let num = 1;
num &&= 11;
console.log(num)

// logical or
let money = 0rrrrrrr;
money ||= 10
console.log(money)

