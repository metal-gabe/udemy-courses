/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
import 'reflect-metadata';
import { NextFunction, Request, RequestHandler, Response, Router } from 'express';
// Context / Stores / Routers
import { AppRouter } from '../../AppRouter';
// Components / Classes / Controllers / Services
// Assets
// Constants / Models / Interfaces / Types
import { MetadataKeys, Methods } from './models';
// Utils / Methods / Mocks / Decorators
// Styles

/* ========================================================================== */
// INTERNAL HELPERS, INTERFACES, VARS & SET UP
/* ========================================================================== */
// NOTE :: This is a middleware factory?
function bodyValidators(keys: string[]): RequestHandler {
   // NOTE :: This is the actual middleware
   return function (request: Request, response: Response, next: NextFunction) {
      if (!request.body) {
         response.status(422).send('Invalid request');
         return;
      }

      for (const key of keys) {
         if (!request.body[key]) {
            response.status(422).send(`Missing property ${key}`);
            return;
         }
      }

      next();
   };
}

/* ========================================================================== */
// DEFINING THE `CONTROLLER` DECORATOR
/* ========================================================================== */
// NOTE :: `Controller` is the "decorator factory"
export function Controller(routePrefix: string) {
   // NOTE :: this is the actual decorator
   return function (target: Function) {
      const router: Router = AppRouter.instance;

      for (const methodName in target.prototype) {
         const routeHandler = target.prototype[methodName];

         const method: Methods = Reflect.getMetadata(
            MetadataKeys.Method,
            target.prototype,
            methodName,
         );

         const middlewares =
            Reflect.getMetadata(MetadataKeys.Middleware, target.prototype, methodName) || [];

         const path: string = Reflect.getMetadata(MetadataKeys.Path, target.prototype, methodName);

         const requiredBodyProps: string[] =
            Reflect.getMetadata(MetadataKeys.Validator, target.prototype, methodName) || [];

         const validator = bodyValidators(requiredBodyProps);

         if (method && path) {
            router[method](`${routePrefix}${path}`, ...middlewares, validator, routeHandler);
         }
      }
   };
}

/* ========================================================================== */
// ALL REQUIRED EXPORTS
/* ========================================================================== */
