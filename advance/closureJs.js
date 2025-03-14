function openFridge() {
    let count = 0;
    return () => {
        count++;
        return count;
    }
};

const sujon = openFridge()
const sheikh = openFridge()
console.log(sheikh())

const minhazul = openFridge()
console.log(minhazul())

console.log(sujon())
console.log(sujon())