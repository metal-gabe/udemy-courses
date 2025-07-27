/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
// Context / Store / Router
// Components / Classes / Controllers / Services
import { Collection } from './models/Collection';
import { ROOT_URL, User } from './models/User';
import { UserList } from './views/UserList';
// Assets
// Constants / Models / Interfaces / Types
import { UserProps } from './models/general';
// Utils / Methods / Mocks
// Styles

/* ========================================================================== */
// INTERNAL HELPERS, INTERFACES, VARS & SET UP
/* ========================================================================== */
/* ========================================================================== */
// DEFINING THE `INDEX` FILE
/* ========================================================================== */
const users: Collection<User, UserProps> = new Collection<User, UserProps>(
   ROOT_URL,
   (userData: UserProps) => {
      return User.buildUser(userData);
   },
);

users.on('change', () => {
   const root = document.getElementById('root');

   if (root) {
      new UserList(root, users).render();
   }
});

users.fetch();

/* ========================================================================== */
// ALL REQUIRED EXPORTS
/* ========================================================================== */
