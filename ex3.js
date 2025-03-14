var x = 10;
function outer() {
    var y = 20;
    function inner() {
        var z = 30;
        console.log(x + y + z);
    }
    return inner;
}
var result = outer();
result();

//  GEC - Global execution context.

// 1. global memory creation phase
x = undefined;
outer = function { };
result = undefined;

// 2. global execution phase
x = 10;
result = outer();
result(); // invoked result

// 1. function memory creation phase
y = undefined;
inner = function{ }

// 2. function execution phase
y = 20;
return inner;

// 1. function memory creation phase
z = undefined;

// 2. function execution phase
z = 30;
console.log(x + y + z);