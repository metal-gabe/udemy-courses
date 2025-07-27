let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built-in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let colors2: Array<string> = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let myNumbers2: Array<number> = [1, 2, 3];
let truths: boolean[] = [true, true, false];
let truths2: Array<boolean> = [true, true, false];

// Classes
class Car {}
let car: Car = new Car();

// Object Literal
let point: { x: number; y: number; } = {
   x: 10,
   y: 20,
};

// Function
// NOTE :: Everything from the colon after `logNumber` to before the `=` sign is the ANNOTATION FOR THE VARIABLE
// It's NOT the annotation for the function itself
const logNumber: (i: number) => void = (i: number) => {
   console.log(i);
};

// Which version is the right one?
const hola: void = (props) => {};
const hola = (props): void => {}; // I think this one is wrong in terms of typing what the function should return
const mundo: void = function () {};
function senor(): void {}

// When to use annotations
// 1) Function that returns the `any` type
const json = '{"x": 10, "y": 20}';
const coords: { x: number, y: number } = JSON.parse(json);
console.log(coords); // { x: 10, y: 20 }

// 2) When we declare a variable on one line & initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i += 1) {
   if (words[i] === 'green') {
      foundWord = true;
   }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i += 1) {
   if (numbers[i] > 0) {
      numberAboveZero=  numbers[i];
   }
}
