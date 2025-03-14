// ONJECT TEMPLATE USING CLASS

class Person {
    static name = "SUJON Sheikh";


    constructor(name, email) {
        this._name = name;
        this._email = email;
    };
    changeName(name) {
        this._name = name
        console.log(this)
    };
    sendMail(msg) {
        console.log(`To, ${this._email}, ${msg}`)
    };
    getName() {
        return this._name
    };

    get name() {
        return this._name
    };

    set name(name) {
        return this._name = name
    }
    setName(name) {
        this._name = name
    };
    print() {
        console.log(this);
    };
};

const sujon = new Person("Sujon", "sujon@gmail.com");
// sujon.print()
// sujon.sendMail("jerry")
// console.log(sujon)
// sujon.changeName("sheikh");
// sujon.setName("jerry")
// console.log(sujon.getName())
// sujon.name = "jhejhejh"
// console.log(sujon.name);
console.log(Person.name)
