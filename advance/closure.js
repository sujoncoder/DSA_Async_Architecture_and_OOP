const outerFunc = () => {
    console.log("I am loging from outer function.");
    const outer = "from outer variable.";

    return () => {
        console.log(outer)
    };
};

const result = outerFunc();
result();

// ------------------------------

const createCounter = () => {
    let count = 0;

    return () => {
        count++
        return count
    };
};

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
res(5);

// --------------------------------

const roastGiven = () => {
    let roastCount = 0;
    console.log("By default roast count ius :", roastCount);

    return () => {
        roastCount++
        return roastCount;
    };
};

const sujon = roastGiven();
const sheikh = roastGiven();

console.log("sujon", sujon());
console.log("sheikh", sheikh());
console.log("sheikh", sheikh());
console.log("sheikh", sheikh());
