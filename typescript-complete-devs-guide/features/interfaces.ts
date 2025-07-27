interface Vehicle {
   broken: boolean;
   name: string;
   year: number;
}

const oldCivic = {
   broken: true,
   name: 'civic',
   year: 2000,
};

const printVehicle = (vehicle: Vehicle): void => {
   console.log(`Name: ${vehicle.name}`);
   console.log(`Year: ${vehicle.year}`);
   console.log(`Broken?: ${vehicle.broken}`);
};

printVehicle(oldCivic);

// using more complex types in our interfaces
interface Vehicle2 {
   broken: boolean;
   name: string;
   summary(): string;
   year: Date;
}

const oldCivic2 = {
   broken: true,
   name: 'civic2',
   summary(): string {
      return `Name: ${this.name}`;
   },
   year: new Date(),
};

const printVehicle2 = (vehicle: Vehicle2): void => {
   console.log(vehicle.summary());
};

printVehicle2(oldCivic2);

// Re-factoring the code to be more universal
interface Reportable {
   summary(): string;
}

const oldCivic3 = {
   broken: true,
   name: 'civic3',
   summary(): string {
      return `Name: ${this.name}`;
   },
   year: new Date(),
};

const printSummary = (item: Reportable): void => {
   console.log(item.summary());
};

printSummary(oldCivic3);

// Trying out other reportable items
interface Reportable {
   summary(): string;
}

const oldCivic4 = {
   broken: true,
   name: 'civic4',
   summary(): string {
      return `Name: ${this.name}`;
   },
   year: new Date(),
};

const drink = {
   carbonated: true,
   color: 'brown',
   sugar: 40,
   summary(): string {
      return `My drink has ${this.sugar} grams of sugar.`;
   }
};

const printSummary2 = (item: Reportable): void => {
   console.log(item.summary());
};

printSummary2(oldCivic4);
printSummary2(drink);
