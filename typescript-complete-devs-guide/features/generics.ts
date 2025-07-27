class ArrayOfNumbers {
   constructor(public collection: Array<number>) {}

   public get(index: number): number {
      return this.collection[index];
   }
}

class ArrayOfStrings {
   constructor(public collection: Array<string>) {}

   public get(index: number): string {
      return this.collection[index];
   }
}

class ArrayOfAnything<T> {
   constructor(public collection: Array<T>) {}

   public get(index: number): T {
      return this.collection[index];
   }
}

new ArrayOfAnything<string>(['a', 'b', 'c']);

/* ========================================================================== */
// Example of generics w/ functions
/* ========================================================================== */
function printStrings(arr: Array<string>): void {
   for (let i = 0; i < arr.length; i += 1) {
      console.log(arr[i]);
   }
}

function printNumbers(arr: Array<number>): void {
   for (let i = 0; i < arr.length; i += 1) {
      console.log(arr[i]);
   }
}

function printAnything<T>(arr: Array<T>): void {
   for (let i = 0; i < arr.length; i += 1) {
      console.log(arr[i]);
   }
}

printAnything<string>(['a', 'b', 'c']);
printAnything(['d', 'e', 'f']);

/* ========================================================================== */
// Generic constraints
/* ========================================================================== */
class Car {
   public print() {
      console.log('I am a car');
   }
}

class House {
   public print() {
      console.log('I am a house');
   }
}

// this has the potential error
function printHousesOrCars<T>(arr: Array<T>): void {
   for (let i = 0; i < arr.length; i += 1) {
      arr[i].print();
   }
}

printHousesOrCars([1, 2, 3, 4]);

// this uses the constraint to guarantee that the type we pass in will work
interface Printable {
   print(): void;
}

function printHousesOrCars<T extends Printable>(arr: Array<T>): void {
   for (let i = 0; i < arr.length; i += 1) {
      arr[i].print();
   }
}

// does this T declaration work with this union type?
printHousesOrCars<Car | House>([new Car(), new House()]);
