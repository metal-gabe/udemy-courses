/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
import fs from 'fs';
// Context / Store / Router
// Components / Classes / Controllers / Services
// Assets
// Constants / Models / Interfaces / Types
// Utils / Methods / Mocks
// Styles

export class CsvFileReader {
   public data: Array<Array<string>> = [];

   constructor(public filename: string) {}

   public read(): void {
      this.data = fs
         .readFileSync(this.filename, {
            encoding: 'utf-8',
         })
         .split('\n')
         .map((row: string): Array<string> => {
            return row.split(',');
         });
   }
}
