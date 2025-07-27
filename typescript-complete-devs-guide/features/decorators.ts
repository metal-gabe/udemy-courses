@classDeco
class Boat {
   @getProperty
   color: string = 'red';

   // constructor() {}

   @getProperty
   get formattedColor(): string {
      return `This boat color is ${this.color}`;
   }

   @getProperty
   @logError('Bllr sunk the ship!')
   pilot(@paramDeco speed: number, @paramDeco makesWake: boolean): void {
      throw new Error();
      console.log('swish');
   }
}

function classDeco(constructor: typeof Boat) {
   console.log('Class Decos:', constructor);
}

function paramDeco(target: any, key: string, index: number) {
   console.log('Param Decos:', key, index);
}

function getProperty(target: any, key: string) {
   // console.log(target[key]);
   console.log(key);
}

// This is a decorator factory
function logError(errorMessage: string) {
   return function (target: any, key: string, desc: PropertyDescriptor): void {
      const method = desc.value;

      desc.value = function () {
         try {
            method();
         } catch (error) {
            console.log(errorMessage, { error });
         }
      };
   };
}

// new Boat().pilot();
