var a = 1;
function first() {
    var b = 2;
    function second() {
        var c = 3;
        function third() {
            var d = 4;
            console.log(a + b + c + d);
        }
        return third;
    }
    return second();
}
var result = first();
result();


// GEC - Global execution context.

// 1. global memory creation phase.
a = undefined;
first = function{ };
result = undefined;

// 2. global execution phase.
a = 1;
result = first();
result() // result invoked

// 1. function memory creation phase.
b = undefined;
second = function{ };

// 2. function execution phase.
b = 2;
return second();

// 1. function memory creation phase.
c = undefined;
third = function{ };

// 2. function execution phase.
c = 3;
return third;

// 1. function memory creation phase.
d = undefined;

// 2. function execution phase.
d = 4;
console.log(a + b + c + d);