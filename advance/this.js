// NOTE : THIS NODE ENVIRONMENT RETURN {} OBJECT. AND BROWSER ENVIRONMENT RETURN WINDOW OBJECT.


// ARROW FUNCTION THIS MEAN WINDOW OR GLOBAL THIS
const person = {
    name: "Sheikh",
    age: 25,
    arrowFunc: () => {
        console.log("ths", this)
    }
}
person.arrowFunc();

// ------------------OBJECT IN THIS------------------
const player = {
    name: "sujon",
    country: "Bangladeshi",
    run: 2800,
    showRun() {
        return this
        // return this.run
    }
};
console.log(player.showRun());

// --------THIS HAVE DIFFERNT FACE WHERE WHY HOW TO DEFINED YOU THIS --------
// student object
const student = {
    name: "Learner",
    getThis() {
        console.log(this)
    }
};
student.getThis();

// teacher object
const teacher = {
    name: "Teacher"
};
teacher.getThis = student.getThis;
teacher.getThis();

// free this
const freeThis = student.getThis;
console.log(freeThis);

// NOTE : ALWAYS LOOKS BEFORE DOT IF SEE ANYTHING THAT,S MEAN DENOTE IT IF HAVE NOT ANYTHING MEANS IT DENOTE WINDOW OR GLOBAL. 