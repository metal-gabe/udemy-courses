/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// Packages
import fs from 'fs';
// Context / Store / Router
// Components / Classes / Controllers / Services
// Assets
// Constants / Models / Interfaces / Types
// Utils / Methods / Mocks
// Styles

export abstract class CsvFileReader<T> {
   public data: Array<T> = [];

   constructor(public filename: string) {}

   abstract mapRow(row: Array<string>): T;

   public read(): void {
      this.data = fs
         .readFileSync(this.filename, {
            encoding: 'utf-8',
         })
         .split('\n')
         .map((row: string): Array<string> => {
            return row.split(',');
         })
         .map(this.mapRow);
   }
}
