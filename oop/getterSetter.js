class Product {

    constructor(price) {
        this.price = price
    };

    set setPrice(value) {
        this.price = value
    };

    get getPrice() {
        return this.price
    };
};

const apple = new Product(10);
console.log(apple.setPrice(100));