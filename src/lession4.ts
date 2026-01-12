class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`Xin chào, tôi là ${this.name}`);
  }
}

// 2.khởi tạo
const p = new Person("An", 20);
p.greet();

// interface

interface IProduct {
  name: string;
  price: number;
  isActive: boolean;
}

const product1: IProduct = {
  name: "Iphone 14",
  price: 5000,
  isActive: true,
};

interface SumFunction {
  (a: number, b: number): number;
}

const sum: SumFunction = (a, b) => {
  return a + b;
};

sum(1, 2);

type Status = "pending" | "success" | "error";
type ProductDescription = string | null;

type TProduct2 = {
  name: string;
  price: number;
};

type Usser = {
  id: number;
  name: string;
};

type UserResponse = Usser & {
  token: string;
};
