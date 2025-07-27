/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
import axios, { AxiosError, AxiosResponse } from 'axios';
// Context / Store / Router
// Components / Classes / Controllers / Services
import { Eventing } from './Eventing';
// Assets
// Constants / Models / Interfaces / Types
// Utils / Methods / Mocks
// Styles

/* ========================================================================== */
// INTERNAL HELPERS, INTERFACES, VARS & SET UP
/* ========================================================================== */
/* ========================================================================== */
// DEFINING THE `COLLECTION` MODEL
/* ========================================================================== */
export class Collection<T, K> {
   events: Eventing = new Eventing();
   models: Array<T> = [];

   constructor(public rootUrl: string, public deserialize: (json: K) => T) {}

   fetch(): void {
      axios
         .get(this.rootUrl)
         .then((response: AxiosResponse) => {
            for (const record of response.data) {
               this.models.push(this.deserialize(record));
            }

            this.trigger('change');
         })
         .catch((error: AxiosError) => {
            console.error(`There was a problem fetching the users collection from the DB`, {
               error,
            });
         });
   }

   get on() {
      return this.events.on;
   }

   get trigger() {
      return this.events.trigger;
   }
}
