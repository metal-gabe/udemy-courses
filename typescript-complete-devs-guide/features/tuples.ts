// This is your standard object
const drink = {
   color: 'brown',
   carbonated: true,
   sugar: 40, // this would be the amount of grams
};

// Example of a Tuple
const pepsi = ['brown', true, 40];

// right now the above is actually just a standard array
// to make it into a tuple, we have to give it a specific type annotation setup

// like this:
const pepsi2: [string, boolean, number] = ['brown', true, 40];

// this type annotation indicates that this object/record
// has to have a very consistent order of type values contained in it

// I can pull out this annotation into a type array alias thingy:
type Drink = [string, boolean, number];

// and then use it like this:
const pepsi3: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// Example of why we shouldn't use `tuples` very often, if at all
const carSpecs: [number, number] = [400, 3354];

// when we look at the above `carSpecs` tuple, what do those numbers mean?
// How can we know what they mean?

// re-writing the tuple above as an object
// because we have to write keys/property names,
// we can immediately know what the number values correlate to
const carStats = {
   horsepower: 400,
   weight: 3354,
};

// to be honest, I would write the `carStats` object like this
const carStats2 = {
   horsepower: {
      value: 400,
   },
   weight: {
      system: 'lbs', // or we could just write 'pounds', depending on what makes the most sense to people
      value: 3354,
   },
};
