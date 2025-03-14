function first() {
    var a = 1;
    console.log(a)

    function second() {
        var b = 2;
        console.log(b)
    };
    return second;
};

const result = first();
console.log(result)
result();