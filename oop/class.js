class Player {
    constructor(name, run) {
        this.name = name;
        this.run = run;
    };
    getRun() {
        return this.run;
    };
    addRun(newRun) {
        return this.run = this.run + newRun;
    };
};
const sujon = new Player("Sujon", 2500);
console.log(sujon.run)
console.log(sujon instanceof Player); // true

// call get run method
console.log("run", sujon.getRun())
console.log("run", sujon.addRun(26));


// ------------------BANK ACCOUNT------------------------- //

class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    };

    deposite(amount) {
        this.balance += amount;
        return this.balance;
    };

    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount
            return amount
        } else {
            return "Insufficiant balance"
        }
    };
};

const islamiBank = new BankAccount("Sujon", 50000);
console.log(islamiBank.deposite(500));
console.log(islamiBank.withdraw(50000));


// -------------------------INHERITANCE---------------------- //

// PARENT CLASS
class Gadget {
    constructor(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    };
};

// CHILD CLASS
class Laptop extends Gadget {
    constructor(brand, model, price, processor) {
        super(brand, model, price)
        this.processor = processor
    }
};

const myLaptop = new Laptop("Lenovo", "T420", 50000, "Intel");
console.log(myLaptop);
