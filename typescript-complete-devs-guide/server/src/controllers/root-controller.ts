/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
import { NextFunction, Request, Response } from 'express';
// Context / Stores / Routers
// Components / Classes / Controllers / Services
// Assets
// Constants / Models / Interfaces / Types
import { LOGIN_CONTROLLER_PATH_PREFIX } from './login-controller';
import { RequestWithBody } from './decorators/models';
// Utils / Methods / Mocks / Decorators
import { Controller, Get, Use } from './decorators';
// Styles

/* ========================================================================== */
// INTERNAL HELPERS, INTERFACES, VARS & SET UP
/* ========================================================================== */
const requireAuth = (request: Request, response: Response, next: NextFunction): void => {
   if (request.session?.loggedIn) {
      next();
      return;
   }

   response.status(403).send(`
      <div>
         <p>You shall not pass!</p>
         <a href="/auth/login">Try logging in instead?</a>
      </div>
   `);
};

/* ========================================================================== */
// DEFINING THE `ROOT` CONTROLLER
/* ========================================================================== */
@Controller('')
class RootController {
   constructor() {}

   @Get('/')
   public getRoot(request: RequestWithBody, response: Response) {
      if (request.session?.loggedIn) {
         response.send(`
            <div>
               <div>You are logged in</div>
               <p><a href="${LOGIN_CONTROLLER_PATH_PREFIX}/logout">Logout</a></p>
               <div>
                  <a href="/protected">Protected Route</a>
               </div>
            </div>
         `);
      } else {
         response.send(`
               <div>
               <div>You are not logged in</div>
               <p>nothing to see here. shove off!</p>
               <p><a href="${LOGIN_CONTROLLER_PATH_PREFIX}/login">Or login, if you dare! mwahahaha</a></p>
               <div>
                  <a href="/protected">Protected Route</a>
               </div>
            </div>
         `);
      }
   }

   @Get('/protected')
   @Use(requireAuth)
   public getProtected(request: Request, response: Response) {
      response.send(`
         <div>
            <div>welcome to protected route</div>
            <a href="${LOGIN_CONTROLLER_PATH_PREFIX}/logout">Logout</a>
         </div>
      `);
   }
}

/* ========================================================================== */
// ALL REQUIRED EXPORTS
/* ========================================================================== */
