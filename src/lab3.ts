
const averageScore = (scores: number[]): number => {
  const total = scores.reduce((sum, score) => sum + score, 0);
  return total / scores.length;
};
console.log(averageScore([8, 9, 10])); 




type CheckEvenOdd = (num: number) => string;
const checkNumber: CheckEvenOdd = (num) => {
  return num % 2 === 0 ? "Even" : "Odd";
};

console.log(checkNumber(5));
console.log(checkNumber(10)); 




function createUser(name: string, age: number = 18, email?: string) {
  return {
    name,
    age,
    email: email ?? "Not provided",
  };
}


console.log(createUser("Đỗ")); 
console.log(createUser("Đỗ", 25, "do@example.com")); 





function handleProducts(...products: string[]) {
  return products.map((p, index) => `${index + 1}. ${p}`);
}
const productList = ["Laptop", "Phone", "Tablet"];
console.log(handleProducts(...productList));

