/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
import { Router } from 'express';
// Context / Stores / Routers
// Components / Classes / Controllers / Services
// Assets
// Constants / Models / Interfaces / Types
// Utils / Methods / Mocks / Decorators
// Styles

/* ========================================================================== */
// INTERNAL HELPERS, INTERFACES, VARS & SET UP
/* ========================================================================== */
/* ========================================================================== */
// DEFINING THE `APP ROUTER` SINGLETON
/* ========================================================================== */
export class AppRouter {
   private static internalInstance: Router;

   static get instance(): Router {
      if (!AppRouter.internalInstance) {
         AppRouter.internalInstance = Router();
      }

      return AppRouter.internalInstance;
   }
}

/* ========================================================================== */
// ALL REQUIRED EXPORTS
/* ========================================================================== */
