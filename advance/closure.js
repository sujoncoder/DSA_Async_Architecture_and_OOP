const outer = () => {
    const outer = "from outerrrr";

    function inner() {
        console.log(outer)
    }
    return inner;
}
const result = outer();
result();


// ------------------------------

const createCounter = () => {
    let count = 0;

    return function () {
        count++
        return count
    };
}

const counter = createCounter();
console.log(counter())
console.log(counter())


// --------------------------------

function createMultiply(item) {
    console.log("from multiply func", item);

    return function (number) {
        const result = item * number;
        console.log("Total ", result)
        return result;
    };

};

const res = createMultiply(3);
res(3);


/// ------------------------
