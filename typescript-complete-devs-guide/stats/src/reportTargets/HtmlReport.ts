/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
import fs from 'fs';
// Context / Store / Router
// Components / Classes / Controllers / Services
import { OutputTarget } from '../Summary';
// Assets
// Constants / Models / Interfaces / Types
// Utils / Methods / Mocks
// Styles

/* ========================================================================== */
// INTERNAL HELPERS, INTERFACES, VARS & SET UP
/* ========================================================================== */
/* ========================================================================== */
// DEFINING THE `HTML REPORT` CLASS
/* ========================================================================== */
export class HtmlReport implements OutputTarget {
   constructor() {}

   public print(report: string): void {
      const html = `
         <div>
            <h1>Analysis Output</h1>
            <div>${report}</div>
         </div>
      `;

      fs.writeFileSync('report.html', html);
   }
}
