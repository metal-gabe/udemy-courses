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

/* ========================================================================== */
// DEFINING THE `COMPANY` COMPONENT
/* ========================================================================== */
export class Company implements MapEntity {
   public catchPhrase: string;
   public companyName: string;
   public location: Location;
   public markerColor = 'blue';

   constructor() {
      const { address, company } = faker;
      const { latitude, longitude } = address;
      const { catchPhrase, companyName } = company;
      this.catchPhrase = catchPhrase();
      this.companyName = companyName();
      const coords = [latitude(), longitude()];

      this.location = {
         lat: parseFloat(coords[0]),
         lng: parseFloat(coords[1]),
      };
   }

   public markerContent(): string {
      // console.log('🚀--BLLR?: ================================================');
      // console.log('🚀--BLLR?: COMPANY INSTANCE OF THIS? ->', this); // TODO **[G]** :: REMOVE ME!!!
      // console.log('🚀--BLLR?: ================================================');

      return `
         <div>
            <h1>Company Name: ${this?.companyName || 'Bueller'}</h1>
            <h3>Catch Phrase: ${this?.catchPhrase || 'Hola Mundo'}</h3>
         </div>
      `;
   }
}
