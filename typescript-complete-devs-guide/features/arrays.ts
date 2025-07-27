// const carMakers: Array<string>
const carMakers = ['ford', 'toyota', 'chevy'];

// const dates: Array<Date>
const dates = [new Date(), new Date()];

// const carsByMake: Array<Array<string>>
const carsByMake = [
   ['f150'],
   ['corolla'],
   ['camaro'],
];

// Help w/ inference when extracting values
const car = carMakers[0]; // const car: string;
const myCar = carMakers.pop(); // const myCar: string;

// Prevent incompatible types
carMakers.push(100); // doesn't work, we get an error

// Help with `map`
carMakers.map((car: string): string => {
   return car.toUpperCase();
});

// Flexible types

// This setup gives us type inference
const importantDates = [new Date(), '2030-10-10']; // const importantDates: Array<string | Date>

// This setup declares, explicitly, that we want our array to be composed of dates & strings only
// In this way, we can start with either just dates, just strings, or nothing at all
const newImpDates: Array<string | Date> = []; // const importantDates: Array<string | Date>
newImpDates.push('2030-12-12');
newImpDates.push(new Date());
