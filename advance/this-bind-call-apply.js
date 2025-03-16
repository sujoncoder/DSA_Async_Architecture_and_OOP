// NOTE : CALL, BIND, APPLY MAIN CONTEXT IS SHARE ACCROSS THIS CONTEX

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


// ---------------------------------------------------- //

// CALL --- The call() method takes arguments separately.
const person = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}

const person1 = {
    firstName: "Sujon",
    lastName: "Sheikh"
};
console.log(person.fullName.call(person1, "Magura", "Bangladesh"));

// APPLY -- The apply() method takes arguments as an array.
const anotherPerson = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
};

const anotherPerson1 = {
    firstName: "Jerin",
    lastName: "Jaman"
};
console.log(anotherPerson.fullName.apply(anotherPerson1, ["Gazipur", "Bangladesh"]));

// BIND
const nextPerson = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const member = {
    firstName: "Nuraiya",
    lastName: "Sheikh",
}

let fullName = nextPerson.fullName.bind(member);
console.log(fullName());