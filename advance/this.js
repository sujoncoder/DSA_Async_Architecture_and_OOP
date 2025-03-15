// NOTE : THIS NODE ENVIRONMENT RETURN {} OBJECT. AND BROWSER ENVIRONMENT RETURN WINDOW OBJECT.
console.log(this);

function one() {
    const name = "sujon"
    console.log(this)
};
one(); // undefined

const two = function () {
    const name = "sujon2"
    console.log(this)
};
two(); // undefined

const arrowFunc = () => {
    const name = "Sujon Sheikh"
    console.log(this)
};
arrowFunc();