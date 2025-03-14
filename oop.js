function person(name, age) {
    this.name = name;
    this.age = age;
    return this
};

const p1 = new person("sujon", 22);
const p2 = new person("sheikh", 202);
console.log(p1)
console.log(p2)