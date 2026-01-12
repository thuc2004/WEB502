const myName: string = "Huy";
const myAge: number = 21;
const isStudent: boolean = true;

console.log(`Name: ${myName}, Age: ${myAge}, Is Student: ${isStudent}`);

let count = 10;

console.log("Count:", count);

let person :{ name: string; age: number; isStudent: boolean } = {
    name: "Huy",
    age: 21,
    isStudent: true,
};

console.log(person);

let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ["Apple", "Banana", "Cherry"];

console.log("Numbers:", numbers);
console.log("Fruits:", fruits); 

let score: Array<number> = [90, 85, 88];
console.log("Scores:", score);
let names:Array<string> = ["Huy", "John", "Alice"];
console.log("Names:", names);

let tuple: [string, number, boolean] = ["Huy", 21, true];
// tuple[0] = "John";
// tuple[1] = 25;
// tuple[2] = false;
tuple = ["Alice", 30, true];

console.log("Tuple:", tuple);

let data: any = 10;
data = "Hello";
console.log("Data:", data);
data = true;
console.log("Data:", data);

let result: number | string | boolean;
result = 100;
console.log("Result:", result);
result = "Success";
console.log("Result:", result);
result = false;
console.log("Result:", result);

let status: "success" | "error" | "pending";
status = "success";
console.log("Status:", status);
status = "error";
console.log("Status:", status);

let value:string | null = null;
let scores: number | undefined = undefined;
console.log("Value:", value);
console.log("Scores:", scores);


let input: unknown = 42;
if(typeof input === "number") {
    let num : number = input;
    console.log("Number:", num);
}

let datas: any =10;
console.log("Data:", datas);
let num: number = datas;
console.log("Num:", num);


let someValue: any = "This is a string";
console.log("Some Value:", someValue);
let strLegth: number = (someValue as string).length;
let strLegth2: number = (<string>someValue).length;
console.log("String Length:", strLegth, strLegth2);

let dataaa: {
    id:number, title: string, description: null | string;timeLearn?:number | undefined;
} = {
    id: 1,
    title: "Introduction to TypeScript",
    description: null,
    
};

dataaa.timeLearn = undefined;
dataaa.description = null;
dataaa.title ="abc";

console.log("Dataaa:", dataaa);