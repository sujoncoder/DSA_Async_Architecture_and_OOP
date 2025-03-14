const parent = {
    hello: () => {
        console.log("hello world")
    }
};
const child = Object.create(parent);
child.hello()