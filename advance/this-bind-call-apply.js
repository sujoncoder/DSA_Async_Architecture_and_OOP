const sujonInfo = {
    name: "Sujon",
    age: 25,
    getInfo() {
        console.log(`Name ${this.name} and her age ${this.age}`)
    }
};
sujonInfo.getInfo();

// BIND
const jerry = {
    name: "Jerry",
    age: 21
};
const jerryInfo = sujonInfo.getInfo.bind(jerry);
jerryInfo();

// CALL
const jannati = {
    name: "Jannati",
    age: 22
};
sujonInfo.getInfo.call(jannati); // direact call

// APPLY
const nuraiya = {
    name: "Nuraiya",
    age: 18
};
sujonInfo.getInfo.apply(nuraiya);