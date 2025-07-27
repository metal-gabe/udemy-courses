/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
import 'reflect-metadata';
import { RequestHandler } from 'express';
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
// DEFINING THE `USE` DECORATOR
/* ========================================================================== */
// NOTE :: `Use` is the "decorator factory"
export function Use(middleware: RequestHandler) {
   // NOTE :: this is the actual decorator
   return function (target: any, key: string, desc: PropertyDescriptor) {
      const middlewares = Reflect.getMetadata(MetadataKeys.Middleware, target, key) || [];
      Reflect.defineMetadata(MetadataKeys.Middleware, [...middlewares, middleware], target, key);
   };
}

/* ========================================================================== */
// ALL REQUIRED EXPORTS
/* ========================================================================== */
