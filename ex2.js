var a = 5;
function outer() {
    var b = 10;
    function inner() {
        var c = 15;
        console.log(a + b + c);
    }
    inner();
}
outer();

// GEC - global execution context
// global memory creation phase
a = undefined;
outer = outer function body defination;

// global execution phase
a = 5;
outer() // execute outer function ==> when execute outer function that ti,e create two phase 1.function memory creation phase 2. function execution phase.


// 1.Function memory creation phase
b = undefined;
inner = inner function body defination;

// 2.Function execution phase
b = 10;
inner() // execute outer function ==> when execute outer function that ti,e create two phase 1.function memory creation phase 2. function execution phase.


// 1.function memory creation phase
c = undefined;


// 2.function execution  phase
c = 15;