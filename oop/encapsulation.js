// ENCAPSULATION
class Player {

    // private property do not access outside
    #name
    #age
    #sallery

    constructor(name, age, sallery) {
        this.#name = name;
        this.#age = age;
        this.#sallery = sallery;
    };

    // # mean do not access outside but in the side any method access any method.
    getName(name) {
        return this.#name = name
    };

    #getAge(age) {
        return this.#age = age
    };
};
const sujon = new Player("sujon", 25, "30000");
console.log(sujon.getName("sheikh"))

