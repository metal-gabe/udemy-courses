/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
// Context / Store / Router
// Components / Classes / Controllers / Services
// Assets
// Constants / Models / Interfaces / Types
import type { Analyzer } from '../Summary';
import type { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResult';
// Utils / Methods / Mocks
// Styles

/* ========================================================================== */
// INTERNAL HELPERS, INTERFACES, VARS & SET UP
/* ========================================================================== */
/* ========================================================================== */
// DEFINING THE `WINS ANALYSIS` CLASS
/* ========================================================================== */
export class WinsAnalysis implements Analyzer {
   constructor(public teamName: string) {}

   public run(matches: Array<MatchData>): string {
      let numWins = 0;

      for (let match of matches) {
         if (match[1] === this.teamName && match[5] === MatchResult.HomeWin) {
            numWins += 1;
         } else if (match[2] === this.teamName && match[5] === MatchResult.AwayWin) {
            numWins += 1;
         }
      }

      return `Team ${this.teamName} won ${numWins} games.`;
   }
}
