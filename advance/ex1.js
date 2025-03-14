var name = "Sujon";

function sayName() {
    console.log(this.name)
};

sayName();

// GEC - Global Execution Context

// ------- 1 - Memory Creation Phase --------- //
name = undefined;
sayName = () { console.log(this.name) };

// ------- 2 -  Execution Phase --------- //
name = "Sujon"
sayName = () { console.log(this.name) };
sayName() // when invoked sayname function create a function execution context

// In the function creation phase there are two phase creation and execution phase


