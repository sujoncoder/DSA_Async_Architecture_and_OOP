const arr = new Array(1, 2, 3)

const arr2 = [1, 2, 3]
console.log(arr2[2])

// console.log(arr === arr2);

const arr3 = [1, 2, 3, 4, 5, 6, 7];
for (const el of arr3) {
    // console.log(el)
};

const newArr = arr3.slice(2, 5);
// console.log(newArr);

// console.log(newArr === arr3)

// console.log(Array.isArray([]));

const arrDes = [1, 2, 3, 4, 5, 6, 7];
const [ak, dui, tin] = arrDes;
// console.log(ak, dui);

// nested array
const arrDes2 = [1, 2, 3, 4, 5, 6, 7, [11, 22, 33, 44]];
// console.log(arrDes2[7][2])

// nested aray des
const [, , , , , , , [, , , ss]] = arrDes2
// console.log(ss)

// ...rest
const restArray = [2, 3, 4, 5, 6];
const [one, ...rest] = restArray;
// console.log(one)
// console.log(rest)

// concat
const arrCat = [1, 2, 3, 4, 5];
const arrCat2 = [6, 7, 8, 9].concat(arrCat)
// console.log(arrCat2)


// join
const arrJoin = [1, 2, 3, 4];
// console.log(arrJoin.join("+"));

const arrflat = [1, 2, 3, [4, 5, 6, [7, 8]]];
const flateRes = arrflat.flat(Infinity);
// console.log(flateRes)