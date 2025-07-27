/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// Packages
// Context / Store / Router
// Components / Classes / Controllers / Services
// Assets
// Constants / Models / Interfaces / Types
import type { OutputTarget } from '../Summary';
// Utils / Methods / Mocks
// Styles

/* ========================================================================== */
// INTERNAL HELPERS, INTERFACES, VARS & SET UP
/* ========================================================================== */
/* ========================================================================== */
// DEFINING THE `CONSOLE REPORT` CLASS
/* ========================================================================== */
export class ConsoleReport implements OutputTarget {
   constructor() {}

   public print(report: string): void {
      console.log('🚀--BLLR?: ===============================================');
      console.log(`🚀--BLLR?: ${report}`);
      console.log('🚀--BLLR?: ===============================================');
   }
}
