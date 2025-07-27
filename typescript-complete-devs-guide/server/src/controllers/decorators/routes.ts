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
import { MetadataKeys, Methods } from './models';
// Utils / Methods / Mocks / Decorators
// Styles

/* ========================================================================== */
// INTERNAL HELPERS, INTERFACES, VARS & SET UP
/* ========================================================================== */
interface RouteHandlerDescriptor extends PropertyDescriptor {
   value?: RequestHandler;
}

/* ========================================================================== */
// DEFINING & BINDING THE ROUTE DECORATORS
/* ========================================================================== */
// NOTE :: This is a closure over the decorator factory
function routeBinder(method: string) {
   // NOTE :: This is the "decorator factory"
   return function (path: string) {
      // NOTE :: this is the actual decorator
      return function (target: any, key: string, desc: RouteHandlerDescriptor) {
         Reflect.defineMetadata(MetadataKeys.Path, path, target, key);
         Reflect.defineMetadata(MetadataKeys.Method, method, target, key);
      };
   };
}

/* ========================================================================== */
// ALL REQUIRED EXPORTS
/* ========================================================================== */
export const Delete = routeBinder(Methods.Delete);
export const Get = routeBinder(Methods.Get);
export const Patch = routeBinder(Methods.Patch);
export const Post = routeBinder(Methods.Post);
export const Put = routeBinder(Methods.Put);
