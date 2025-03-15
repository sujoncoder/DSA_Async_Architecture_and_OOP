function first(a) {
    return function second(b) {
        return function third(c) {
            return a + b + c
        }
    }
};

console.log(first(1)(2)(3))