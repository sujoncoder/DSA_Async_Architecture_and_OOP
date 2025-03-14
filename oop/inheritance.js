// INHERITANCE

// PLAYER
class Player {
    #name
    #age
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    };
    getPlayerDetails() {
        console.log(`Player name ${this.#name} and her age ${this.#age}`)
    };
};


// CRICKETER
class Cricketer {
    #centuries
    constructor(centuries) {
        this.#centuries = centuries;
    };
    getPlayerDetails() {
        console.log("Total centuries ", this.#centuries)
    };
};


// FOOTBALLER
class Footballer {
    #goals
    constructor(goals) {
        this.#goals = goals;
    };
    getPlayerDetails() {
        console.log("Total goals ", this.#goals)
    };
};

// cricket player
const player = new Player("Sujon", 25);
console.log(player.getPlayerDetails())

// cricket player
const sakib = new Cricketer(12);
console.log(sakib.getPlayerDetails());

// football player
const messi = new Footballer(780);
console.log(messi.getPlayerDetails());
