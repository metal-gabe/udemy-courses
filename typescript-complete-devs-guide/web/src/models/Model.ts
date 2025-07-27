/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
import { AxiosPromise, AxiosResponse } from 'axios';
// Context / Store / Router
// Components / Classes / Controllers / Services
// Assets
// Constants / Models / Interfaces / Types
// Utils / Methods / Mocks
// Styles

/* ========================================================================== */
// INTERNAL HELPERS, INTERFACES, VARS & SET UP
/* ========================================================================== */
interface Events {
   on(eventName: string, callback: () => void): void;
   trigger(eventName: string): void;
}

interface HasId {
   id?: number;
}

interface ModelAttributes<T> {
   get<K extends keyof T>(key: K): T[K];
   getAll(): T;
   set(value: T): void;
}

interface Sync<T> {
   fetch(id: number): AxiosPromise;
   save(data: T): AxiosPromise;
}

/* ========================================================================== */
// DEFINING THE `MODEL` MODEL
/* ========================================================================== */
export class Model<T extends HasId> {
   constructor(
      private attributes: ModelAttributes<T>,
      private events: Events,
      private sync: Sync<T>,
   ) {}

   // These are the passthrough methods, no extra work needed
   get get(): T {
      return this.attributes.get;
   }

   get on(): User['events']['on'] {
      return this.events.on;
   }

   get trigger(): User['events']['trigger'] {
      return this.events.trigger;
   }

   // these are the custom methods (i.e. the ones that need extra work)
   public fetch(): void {
      const id: number = this.get('id');

      if (!id) {
         throw new Error('ID not found in `attributes`. Cannot fetch user without one.');
      }

      this.sync
         .fetch(id)
         .then((response: AxiosResponse): void => {
            console.info(`Successfully fetched user with ID #${id}`, { response });
            this.set(response.data);
         })
         .catch((error: AxiosError): void => {
            console.error(`There was a problem retrieving the user info for ID #${id}.`, { error });
         });
   }

   public save(): void {
      this.sync
         .save(this.attributes.getAll())
         .then((response: AxiosResponse): void => {
            console.info('Successfully saved the user', { response });
            this.trigger('save');
         })
         .catch((error: AxiosError): void => {
            console.error('There was a problem saving the user', { error });
            this.trigger('error');
         });
   }

   public set(update: T): void {
      this.attributes.set(update);
      this.trigger('change');
   }
}

/* ========================================================================== */
// ALL REQUIRED EXPORTS
/* ========================================================================== */
