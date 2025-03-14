function addNumber(num1, num2) {
    let sum = 0;

    for (const num of arguments) {
        sum = sum + num
    };
    // console.log(sum)
};

addNumber(1, 23, 23, 45);

function ageCalculate(age) {
    const myAge = new Date().getFullYear() - age
    console.log("myAge", myAge)
};
ageCalculate(1998)

function isEven(num) {
    if (num % 2 === 0) {
        return true
    }
    return false
};
// console.log(isEven(24))

function bigger10(num) {
    if (num > 10) {
        return true
    }
    return false;
};
// console.log(bigger10(11))

function check(arr) {
    for (const num of arr) {
        if (num % 2 === 0) {
            console.log("even", num)
        } else if (num % 2 === 1) {
            console.log("odd", num)
        }
    }
};
// console.log(check([1, 4, 6, 7, 9]))