var x = 5;
function outer() {
    var y = 10;
    function inner() {
        var z = 15;
        console.log(x + y + z);
    }
    return inner;
}
var result = outer();
result();

// GEC - Global execution context.

// 1. global memory creation phase
x = undefined;
outer = function () { };
result = undefined;
// 2. global execution phase
x = 5;
result = outer();
result()

// 1. function memory creation phase
y = undefined;
inner = function () { };
// 2. function execution phase
y = 10;
return inner;

// 1. function memory creation phase
z = undefined;
// 2. function execution phase
z = 15;
console.log(x + y + z);

