/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
// Context / Store / Router
// Components / Classes / Controllers / Services
import { ApiSync } from './ApiSync';
import { Attributes } from './Attributes';
import { Collection } from './Collection';
import { Eventing } from './Eventing';
// Assets
// Constants / Models / Interfaces / Types
import { Model } from './Model';
import { UserProps } from './general'
// Utils / Methods / Mocks
// Styles

/* ========================================================================== */
// INTERNAL HELPERS, INTERFACES, VARS & SET UP
/* ========================================================================== */
export const ROOT_URL = 'http://localhost:3000/users';

/* ========================================================================== */
// DEFINING THE `USER` MODEL
/* ========================================================================== */
export class User extends Model<UserProps> {
   static buildUser(attrs: UserProps): User {
      return new User(
         new Attributes<UserProps>(attrs),
         new Eventing(),
         new ApiSync<UserProps>(ROOT_URL),
      );
   }

   static buildUserCollection(): Collection<User, UserProps> {
      return new Collection<User, UserProps>(ROOT_URL, User.buildUser);
   }

   setRandomAge(): void {
      const age = Math.round(Math.random() * 100);
      this.set({ age });
   }
}
