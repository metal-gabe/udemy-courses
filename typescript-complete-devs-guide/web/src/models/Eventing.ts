/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
// Context / Store / Router
// Components / Classes / Controllers / Services
// Assets
// Constants / Models / Interfaces / Types
// Utils / Methods / Mocks
// Styles

/* ========================================================================== */
// INTERNAL HELPERS, INTERFACES, VARS & SET UP
/* ========================================================================== */
type Callback = () => void;

/* ========================================================================== */
// DEFINING THE `EVENTING` MODEL
/* ========================================================================== */
export class Eventing {
   events: { [key: string]: Array<Callback> } = {};

   constructor(): void {}

   public on = (eventName: string, cb: Callback): void => {
      const handlers: Array<Callback> = this.events[eventName] ?? [];
      handlers.push(cb);
      this.events[eventName] = handlers;
   };

   public trigger = (eventName: string): void => {
      const handlers: Array<Callback> = this.events[eventName];

      if (handlers?.length) {
         handlers.forEach((cb: Callback) => {
            cb();
         });
      }
   };
}
