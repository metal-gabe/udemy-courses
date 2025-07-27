/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
// Context / Store / Router
// Components / Classes / Controllers / Services
import { CollectionView } from './CollectionView';
import { UserShow } from './UserShow';
// Assets
// Constants / Models / Interfaces / Types
import { User } from '../models/User';
import { UserProps } from '../models/general';
// Utils / Methods / Mocks
// Styles

/* ========================================================================== */
// INTERNAL HELPERS, INTERFACES, VARS & SET UP
/* ========================================================================== */
/* ========================================================================== */
// DEFINING THE `USER LIST` COMPONENT
/* ========================================================================== */
export class UserList extends CollectionView<User, UserProps> {
   renderItem(model: User, itemParent: Element): void {
      new UserShow(itemParent, model).render();
   }
}

/* ========================================================================== */
// ALL REQUIRED EXPORTS
/* ========================================================================== */
