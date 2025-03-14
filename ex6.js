var a = 1;

function first() {
    var b = 2;
    function second() {
        var c = 3;
        console.log(a + b + c);
    };
    return second;
};

var result = first();
result();


// ====== Global Execution Context (GEC) ======

// --- 1. Global Memory Creation Phase ---
// Variables and functions are hoisted (allocated memory).
var a = undefined; // 'a' is initialized with 'undefined'
function first() { }; // 'first' function is hoisted and stored in memory
var result = undefined; // 'result' is initialized with 'undefined'

// --- 2. Global Execution Phase ---
a = 1; // 'a' is assigned the value 1
result = first(); // 'first()' is invoked, and its return value is stored in 'result'
result(); // The returned function (from 'first()') is invoked

// ====== Function Execution Context (FEC) for `first()` ======

// --- 1. Function Memory Creation Phase ---
// Variables and functions inside 'first' are hoisted.
var b = undefined; // 'b' is initialized with 'undefined'
function second() { }; // 'second' function is hoisted and stored in memory

// --- 2. Function Execution Phase ---
b = 2; // 'b' is assigned the value 2
return second(); // 'second()' is invoked, and its return value is returned

// ====== Function Execution Context (FEC) for `second()` ======

// --- 1. Function Memory Creation Phase ---
// Variables and functions inside 'second' are hoisted.
var c = undefined; // 'c' is initialized with 'undefined'
function third() { }; // 'third' function is hoisted and stored in memory

// --- 2. Function Execution Phase ---
c = 3; // 'c' is assigned the value 3
return third; // The 'third' function is returned (not invoked yet)

// ====== Function Execution Context (FEC) for `third()` ======

// --- 1. Function Memory Creation Phase ---
// Variables inside 'third' are hoisted.
var d = undefined; // 'd' is initialized with 'undefined'

// --- 2. Function Execution Phase ---
d = 4; // 'd' is assigned the value 4
console.log(a + b + c + d); // Logs the sum of 'a', 'b', 'c', and 'd' (1 + 2 + 3 + 4 = 10)