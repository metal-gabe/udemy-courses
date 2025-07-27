/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
// Context / Store / Router
// Components / Classes / Controllers / Services
import { CsvFileReader } from './CsvFileReader';
// Assets
// Constants / Models / Interfaces / Types
import type { MatchData } from './MatchData';
import type { MatchResult } from './MatchResult';
// Utils / Methods / Mocks
import { dateStringToDate } from './utils';
// Styles

interface DataReader {
   read(): void;
   data: Array<Array<string>>;
}

export class MatchReader {
   static fromCsv(filename: string): MatchReader {
      return new MatchReader(new CsvFileReader(filename));
   }

   public matches: Array<MatchData> = [];

   constructor(public reader: DataReader) {}

   public load(): void {
      this.reader.read();

      this.matches = this.reader.data.map((row: Array<string>): MatchData => {
         return [
            dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as MatchResult,
            row[6],
         ];
      });
   }
}
