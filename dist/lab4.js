"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student = {
    id: 1,
    name: "Minh Thuc",
    score: 35,
};
console.log("Sinh viên:", student);
const user = {
    id: 1,
    email: "admin@gmail.com",
};
console.log("user:", user);
const calculateSum = (a, b) => {
    return a + b;
};
console.log("Sum:", calculateSum(5, 10));
const calmulateMultiply = (a, b) => {
    return a * b;
};
console.log("Multiply:", calmulateMultiply(5, 10));
function logStatus(status) {
    if (status === "loading") {
        console.log("API is loading...");
    }
    else if (status === "success") {
        console.log("API call was successful!");
    }
    else if (status === "error") {
        console.log("API call failed.");
    }
    console.log("API Status:", status);
}
logStatus("loading");
logStatus("success");
logStatus("error");
