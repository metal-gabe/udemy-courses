/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
// Context / Store / Router
// Components / Classes
import { Company } from './Company';
import { Map } from './Map';
import { User } from './User';
// Assets
// Constants / Models / Interfaces / Types
// Utils / Methods / Mocks
// Styles

/* ========================================================================== */
// INTERNAL HELPERS, INTERFACES, VARS & SET UP
/* ========================================================================== */
/* ========================================================================== */
// DEFINING THE `INDEX` FILE
/* ========================================================================== */
const company: Company = new Company();
const map: Map = new Map('map');
const user: User = new User();

console.log(company);
console.log(map);
console.log(user);

map.addMarker(company);
map.addMarker(user);

/* ========================================================================== */
// ALL REQUIRED EXPORTS
/* ========================================================================== */
