/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// Packages
// Context / Store / Router
// Components / Classes / Controllers / Services
import { CsvFileReader } from './CsvFileReader';
// Assets
// Constants / Models / Interfaces / Types
import type { MatchResult } from '../MatchResult';
// Utils / Methods / Mocks
import { dateStringToDate } from '../utils';
// Styles

type MatchData = [Date, string, string, number, number, MatchResult, string]; // this is a Tuple definition

export class MatchReader extends CsvFileReader<MatchData> {
   public mapRow(row: Array<string>): MatchData {
      return [
         dateStringToDate(row[0]),
         row[1],
         row[2],
         parseInt(row[3]),
         parseInt(row[4]),
         row[5] as MatchResult,
         row[6],
      ];
   }
}
