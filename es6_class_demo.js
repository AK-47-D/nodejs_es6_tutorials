// 在 Node 中使用模块的正确姿势：
const log = require("./lib/util_for_node");

class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    list() {
        return [
            new Product("iPad Pro 2018", 10000),
            new Product('iPhone XMax', 9000),
        ]
    }
}

const main = () => {
    const p = new Product()
    const list = p.list()
    log(list)
}

main();

/**
 * 输出：
 $ node es6_class_demo.js

 [ Product { name: 'iPad Pro 2018', price: 10000 },
 Product { name: 'iPhone XMax', price: 9000 } ]

 */


class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + ' makes a noise.');
    }
}

class Dog extends Animal {
    speak() {
        console.log(this.name + ' barks.');
    }
}

var d = new Dog('Mitzie');
d.speak(); // Mitzie barks.