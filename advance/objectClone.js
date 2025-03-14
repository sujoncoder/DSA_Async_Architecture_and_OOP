// CLONING WITH OBJECT
const person = {
    name: "sujon",
    age: 25,
    isMarried: false,
    hoby: ["codding", "football"]
};

console.log(person);

const copy = person;
console.log("copy", copy === person);

// SPREAD OBJECT
const spreadObj = { ...person };
console.log("spreadObj", spreadObj === person);
spreadObj.name = "sheikh";
spreadObj.hoby.push("reading")
console.log(spreadObj);
console.log(person);

// NESTED CLONING
const nestedCloning = { ...person, hoby: [...person.hoby] };
console.log("nestedCloning", nestedCloning);
console.log("nestedCloning", nestedCloning === person);
nestedCloning.hoby.push("nestedCloning");
console.log(person);
console.log(nestedCloning);

// STRUCTURED CLONE
const structuredCloneObj = structuredClone(person);
console.log(person === structuredCloneObj);
structuredCloneObj.hoby.push("flating");
console.log("structuredCloneObj", structuredCloneObj);
console.log(person);

// NOTE : ...SPREAD OPARATOR CAN SHALLOW COPY OTHER HAND STRUCTUREDCLONE CAN DEEP OR NESTED COPY WITHOUT FUNCTION.