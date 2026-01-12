"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const myName = "Huy";
const myAge = 21;
const isStudent = true;
console.log(`Name: ${myName}, Age: ${myAge}, Is Student: ${isStudent}`);
let count = 10;
console.log("Count:", count);
let person = {
    name: "Huy",
    age: 21,
    isStudent: true,
};
console.log(person);
let numbers = [1, 2, 3, 4, 5];
let fruits = ["Apple", "Banana", "Cherry"];
console.log("Numbers:", numbers);
console.log("Fruits:", fruits);
let score = [90, 85, 88];
console.log("Scores:", score);
let names = ["Huy", "John", "Alice"];
console.log("Names:", names);
let tuple = ["Huy", 21, true];
// tuple[0] = "John";
// tuple[1] = 25;
// tuple[2] = false;
tuple = ["Alice", 30, true];
console.log("Tuple:", tuple);
let data = 10;
data = "Hello";
console.log("Data:", data);
data = true;
console.log("Data:", data);
let result;
result = 100;
console.log("Result:", result);
result = "Success";
console.log("Result:", result);
result = false;
console.log("Result:", result);
let status;
status = "success";
console.log("Status:", status);
status = "error";
console.log("Status:", status);
let value = null;
let scores = undefined;
console.log("Value:", value);
console.log("Scores:", scores);
let input = 42;
if (typeof input === "number") {
    let num = input;
    console.log("Number:", num);
}
let datas = 10;
console.log("Data:", datas);
let num = datas;
console.log("Num:", num);
let someValue = "This is a string";
console.log("Some Value:", someValue);
let strLegth = someValue.length;
let strLegth2 = someValue.length;
console.log("String Length:", strLegth, strLegth2);
let dataaa = {
    id: 1,
    title: "Introduction to TypeScript",
    description: null,
};
dataaa.timeLearn = undefined;
dataaa.description = null;
dataaa.title = "abc";
console.log("Dataaa:", dataaa);
