/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
import { Request } from 'express';
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
// DEFINING THE METHODS GLOBALLY
/* ========================================================================== */
export enum MetadataKeys {
   Method = 'method',
   Middleware = 'middleware',
   Path = 'path',
   Validator = 'validator',
}

export enum Methods {
   Delete = 'delete',
   Get = 'get',
   Patch = 'patch',
   Post = 'post',
   Put = 'put',
}

export interface RequestWithBody extends Request {
   body: { [key: string]: string | undefined };
}

/* ========================================================================== */
// ALL REQUIRED EXPORTS
/* ========================================================================== */
