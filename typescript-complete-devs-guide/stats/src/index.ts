/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
// Context / Store / Router
// Components / Classes / Controllers / Services
import { MatchReader } from './MatchReader';
import { Summary } from './Summary';
// Assets
// Constants / Models / Interfaces / Types
// Utils / Methods / Mocks
// Styles

/* ========================================================================== */
// DEFINING THE INDEX METHOD OPERATIONS
/* ========================================================================== */
const matchReader: MatchReader = MatchReader.fromCsv('football-data.csv');
const summary: Summary = Summary.winsAnalysisWithHtmlReport('Man United');

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
