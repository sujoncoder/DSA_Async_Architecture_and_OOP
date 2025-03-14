console.log(1);
var a = 5;

function testMe() {
    console.log(2);
    var b = 10;
    var user = {
        name: "Sujon Sheikh",
        country: "Bangladesh"
    };
    function testAgain() {
        console.log(3);
        console.log(4);
    };
    testAgain();
    console.log(5);
};
testMe();
console.log(6);

// EC - EXECUTION CONTEXT;

// GEC - Global Execution Context
// --1-- GMCP - Global Memory Creation Phase.
a: undefined
testMe: function() { } // store in the memory.
// --2-- GMCP - Global Execution Phase.
a: 5
testMe() // Invokes the testme function.

// FEC - Function Execution Context
// --1-- FMCP - Function Memory Creation Phase.
b: undefined
user: undefined
testAgain: function() { } // store in the memory.
// --2-- FEC - Function Execution Phase.
b: 10;
user: {... }
testAgain() // Invokes the testAgain function.

// FEC - Function Execution Context
// --1-- FMCP - Function Memory Creation Phase.

// --2-- FEC - Function Execution Phase.
console.log(3);
console.log(4);