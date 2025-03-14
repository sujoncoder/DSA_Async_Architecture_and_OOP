// INHERITANCE 2.0

// PLAYER
class Player {
    #name
    #age
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    };

    getName() {
        return this.#name
    };

    getAge() {
        return this.#age
    }

    // getter function
    getPlayerDetails() {
        console.log(`Player name ${this.#name} and her age ${this.#age}`)
    };
};


// CRICKETER
class Cricketer extends Player {
    #centuries
    constructor(name, age, centuries) {
        super(name, age)
        this.#centuries = centuries;
    };

    // getter function
    getPlayerDetails() {
        console.log(`khelowar er name ${this.getName()} abong tar boyosh ${this.getAge()}`)
    };
};


// FOOTBALLER
class Footballer extends Player {
    #goals
    constructor(name, age, goals) {
        super(name, age)
        this.#goals = goals;
    };
};



// player
const sakib = new Cricketer("Sakib", 25, 7);
const messi = new Footballer("Messi", 35, 799);
console.log(sakib.getPlayerDetails())
console.log(messi.getPlayerDetails())