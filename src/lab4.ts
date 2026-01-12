type Student = {
  id: number;
  name: string;
  score: number;
};
const student: Student = {
  id: 1,
  name: "Minh Thuc",
  score: 35,
};
console.log("Sinh viên:", student);

interface User {
  id: number;
  email: Required<string>;
  phone?: number;
}
const user: User = {
  id: 1,
  email: "admin@gmail.com",
};
console.log("user:", user);

type FunctionCalculate = (a: number, b: number) => number;

const calculateSum: FunctionCalculate = (a, b) => {
  return a + b;
};

console.log("Sum:", calculateSum(5, 10));

const calmulateMultiply: FunctionCalculate = (a, b) => {
  return a * b;
};
console.log("Multiply:", calmulateMultiply(5, 10));

type ApiStatus = "idle" | "loading" | "success" | "error";
function logStatus(status: ApiStatus) {
  if (status === "loading") {
    console.log("API is loading...");
  } else if (status === "success") {
    console.log("API call was successful!");
  } else if (status === "error") {
    console.log("API call failed.");
  }
  console.log("API Status:", status);
}
logStatus("loading");
logStatus("success");
logStatus("error");
