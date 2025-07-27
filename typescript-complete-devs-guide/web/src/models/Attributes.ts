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
/* ========================================================================== */
// DEFINING THE `ATTRIBUTES` MODEL
/* ========================================================================== */
export class Attributes<T> {
   constructor(private data: T): void {}

   public get = <K extends keyof T>(key: K): T[K] => {
      return this.data[key];
   };

   public getAll(): T {
      return this.data;
   }

   public set = (newValues: T): void => {
      // NOTE **[G]** :: Which version is/(do I like) "better" for me?
      Object.assign(this.data, newValues);
      // this.data = { ...this.data, ...newValues };
   };
}
