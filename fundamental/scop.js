// block scop
{
    const color = "yellow";
}
// console.log(color)

// GLOBAL SCOPE
const a = "apple";

// function scop
function hello() {
    console.log("Hello world");
    let name = "sujon"
};

// scope chain
function outer(item) {
    console.log("Outer")
    const outer = "I am outer"

    function inner() {
        console.log("inner")

        function nest() {
            console.log("I am from nested", item * 2)
        }
        nest();
    };
    inner();
};
outer(2);

// NOTE : VAR HAS NO BLOCK SCOPE 
{
    var sala = "nooooooooooooo"
}
console.log(sala)