const orginal = {
    name: "sujon",
    age: 25,
    address: { city: "magura" }
};

// const copy = orginal;
// orginal.name = "jerin"
// console.log(orginal)
// console.log(copy)

const copy = {
    ...orginal,
    address: { ...orginal.address }
};

// const copy = { ...orginal }

// orginal.name = "jerry"
orginal.address.city = "japan"
console.log(orginal === copy);
console.log(orginal.address === copy.address);
console.log("orginal", orginal)
console.log("copy", copy)

