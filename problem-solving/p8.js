const uppercase = (str) => str.toUpperCase();
const trim = (str) => str.trim();
const add = (str) => str + "!";

const res = add(trim(uppercase("hello")));
console.log(res)