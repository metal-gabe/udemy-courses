/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
import 'reflect-metadata';
// Context / Stores / Routers
// Components / Classes / Controllers / Services
// Assets
// Constants / Models / Interfaces / Types
import { MetadataKeys } from './models';
// Utils / Methods / Mocks / Decorators
// Styles

/* ========================================================================== */
// INTERNAL HELPERS, INTERFACES, VARS & SET UP
/* ========================================================================== */
/* ========================================================================== */
// DEFINING THE `BODY VALIDATOR` DECORATOR
/* ========================================================================== */
// NOTE :: `BodyValidator` is the "decorator factory"
export function BodyValidator(...keys: string[]) {
   // NOTE :: this is the actual decorator
   return function (target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata(MetadataKeys.Validator, keys, target, key);
   };
}

/* ========================================================================== */
// ALL REQUIRED EXPORTS
/* ========================================================================== */
