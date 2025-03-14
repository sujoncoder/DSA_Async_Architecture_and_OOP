function createCounter(init) {
    let count = init;
    return {
        increment: function () {
            return count += 1
        },
        decrement: function () {
            return count -= 1
        },
        reset: function () {
            return count = init
        }

    }
}

// expected : [1,2,1,0,0]
const counter = createCounter(0)
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.decrement());
// console.log(counter.reset());
// console.log(counter.reset());
