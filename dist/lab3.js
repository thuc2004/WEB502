"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const averageScore = (scores) => {
    const total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
};
console.log(averageScore([8, 9, 10]));
const checkNumber = (num) => {
    return num % 2 === 0 ? "Even" : "Odd";
};
console.log(checkNumber(5));
console.log(checkNumber(10));
function createUser(name, age = 18, email) {
    return {
        name,
        age,
        email: email ?? "Not provided",
    };
}
console.log(createUser("Đỗ"));
console.log(createUser("Đỗ", 25, "do@example.com"));
function handleProducts(...products) {
    return products.map((p, index) => `${index + 1}. ${p}`);
}
const productList = ["Laptop", "Phone", "Tablet"];
console.log(handleProducts(...productList));
