//void
function sayHello(){
    console.log("Hello, world!");
}

sayHello();

function add(a: number, b: number): number {
    return a + b;
}
console.log(add(5, 10)); // Output: 15

function greet(name: string): void {
    console.log(`Hello, ${name}!`);
}
greet("Alice"); // Output: Hello, Alice!

//this is new to me
function sum(a:number, b:number, ...rest:number[]): number {
    return a + b + rest.reduce((acc, val) => acc + val, 0); //initial value of acc is 0 , then add all the rest values 
}

console.log(sum(1, 2)); // Output: 3
console.log(sum(1, 2, 3, 4)); // Output: 10 
console.log(sum(1, 2, 3, 4, 5)); // Output: 15

//short hand for function
const add2 = (a: number, b: number): number => a + b;
console.log(add2(5, 10)); // Output: 15
//short hand for function with void
const greet2 = (name: string): void => {
    console.log(`Hello, ${name}!`);
}
greet2("Alice"); // Output: Hello, Alice!
//short hand for function with rest
const sum2 = (a: number, b: number, ...rest: number[]): number => {
    return a + b + rest.reduce((acc, val) => acc + val, 0);
}
console.log(sum2(1, 2)); // Output: 3
console.log(sum2(1, 2, 3, 4)); // Output: 10
console.log(sum2(1, 2, 3, 4, 5)); // Output: 15


// this is new to me
function multiply(a: number, b: number): number {
    return a * b;
}

//test multiply function
console.log(multiply(5, 10)); // Output: 50
