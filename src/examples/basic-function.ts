// Basic Arithmatic Functions

const add = (num1: number, num2: number): number => num1 + num2; // First-Class Function because we assigned a function to a variable.

const subtract = (num1: number, num2: number): number => num1 - num2;

const multiply = (num1: number, num2: number): number => num1 * num2;

const addOne = (num: number): number => num + 1;
const double = (num: number): number => num * 2;

const addOneThenDouble = (num: number) => double(addOne(num)); // Function Composition because we combined two functions to create a new function.

console.log(addOneThenDouble(8)); // Expect 18;
