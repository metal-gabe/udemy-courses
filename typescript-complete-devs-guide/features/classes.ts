interface VehicleProps {
   color: string;
   name: string;
}

class Vehicle {
   public color: string;
   readonly name: string;

   constructor({ color, name }: VehicleProps) {
      this.color = color;
      this.name = name;
   }

   // public drive(): void {
   //    console.log(`${this.name} goes chugga chugga`);
   // }

   protected honk(): void {
      console.log(`${this.name} goes beep`);
   }
}

const vehicle: Vehicle = new Vehicle({ color: 'orange', name: 'automobile' });
// vehicle.drive();
// vehicle.honk(); // it is not possible to call this method because it is "protected" and can only be called within permissable classes
// vehicle.color = 'blue';
console.log(vehicle.color);

class Car extends Vehicle {
   constructor(props: VehicleProps) {
      super(props);
   }

   private drive(): void {
      console.log(`${this.name} goes vroom!`);
   }

   public startDriving(): void {
      this.honk(); // this is accessible from the parent class because it's modified as "protected" in the Vehicle class
      this.drive();
   }

   public zooms(): void {
      console.log(`${this.name} zoom zooms!`);
   }
}

const car: Car = new Car({ color: 'red', name: 'car' });
car.startDriving();
// car.honk(); // it is not possible to call this method because it is "protected" and can only be called within permissable classes
car.zooms();
