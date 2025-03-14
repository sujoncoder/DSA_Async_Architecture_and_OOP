// INSTANCEOF
class Car {
    constructor(model) {
        this.model = model
    };
};


const dog = new Car("BMW");
const dog1 = new Car("Toyota");

console.log(dog instanceof Car);
console.log(dog1 instanceof Car);