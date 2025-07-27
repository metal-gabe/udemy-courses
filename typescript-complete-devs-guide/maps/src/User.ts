/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
import faker from 'faker';
// Context / Store / Router
// Components / Classes
// Assets
// Constants / Models / Interfaces / Types
import { Location, MapEntity } from './Map';
// Utils / Methods / Mocks
// Styles

/* ========================================================================== */
// INTERNAL HELPERS, INTERFACES, VARS & SET UP
/* ========================================================================== */
enum Gender {
   Female = 1,
   Male = 0,
}

/* ========================================================================== */
// DEFINING THE `USER` COMPONENT
/* ========================================================================== */
export class User implements MapEntity {
   public location: Location;
   public markerColor = 'red';
   public name: string;

   constructor() {
      const { address, name } = faker;
      const { latitude, longitude } = address;
      const { firstName } = name;
      const coords = [latitude(), longitude()];

      this.location = {
         lat: parseFloat(coords[0]),
         lng: parseFloat(coords[1]),
      };

      this.name = firstName(Gender.Female);
   }

   public markerContent(): string {
      // console.log('🚀--BLLR?: ================================================');
      // console.log('🚀--BLLR?: USER INSTANCE OF THIS? ->', this); // TODO **[G]** :: REMOVE ME!!!
      // console.log('🚀--BLLR?: ================================================');
      return `User Name: ${this?.name || 'Sloane'}`;
   }
}
