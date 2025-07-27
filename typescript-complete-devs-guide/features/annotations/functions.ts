const add = (a: number, b: number): number => {
   return a + b;
};

// Example of why we should always type annotate a functions return value

// Not providing a type annotation before the arrow means that TS will infer,
// and assign, a type value of `void` for the functions return
const subtract = (a: number, b: number) => {
   a - b;
};

// Examples for named & anonymous ES5 style functions
function divide(a: number, b: number): number {
   return a / b;
}

const multiply = function (a: number, b: number): number {
   return a * b;
}

// Void & Never Types
const logger = (msg: string): void => {
   console.log(msg);
   // you could still technically, though, return null or undefined
   // on a functions `void` return type value
};

const throwError = (msg: string): never => {
   throw new Error(msg);
   // a type of annotation of `never` means that you're not expecting the function
   // to reach the end of it's block, or
   // a.k.a. we will NEVER expect it to return anything, EVER
};

// Destructuring w/ Annotations
const forecast = {
   date: new Date(),
   weather: 'sunny',
};

const logWeather = ({ date, weather }: { date: Date, weather: string }): void => {
   console.log(date);
   console.log(weather);
};

logWeather(forecast);
