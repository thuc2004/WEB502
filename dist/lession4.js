"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Xin chào, tôi là ${this.name}`);
    }
}
// 2.khởi tạo
const p = new Person("An", 20);
p.greet();
const product1 = {
    name: "Iphone 14",
    price: 5000,
    isActive: true,
};
const sum = (a, b) => {
    return a + b;
};
sum(1, 2);
