/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
// Context / Store / Router
// Components / Classes / Controllers / Services
import { UserForm } from './UserForm';
import { UserShow } from './UserShow';
import { View } from './View';
// Assets
// Constants / Models / Interfaces / Types
import { RegionsMap, UserProps } from '../models/general';
import { User } from '../models/User';
// Utils / Methods / Mocks
// Styles

/* ========================================================================== */
// INTERNAL HELPERS, INTERFACES, VARS & SET UP
/* ========================================================================== */
/* ========================================================================== */
// DEFINING THE `USER EDIT` COMPONENT
/* ========================================================================== */
export class UserEdit extends View<User, UserProps> {
   // constructor() {}

   onRender(): void {
      const userForm = new UserForm(this.regions.userForm, this.model);
      userForm.render();

      const userShow = new UserShow(this.regions.userShow, this.model);
      userShow.render();
   }

   regionsMap(): RegionsMap {
      return {
         userForm: '.user-form',
         userShow: '.user-show',
      };
   }

   template(): string {
      return `
         <div>
            <h1>User Edit</h1>
            <div class="user-show"></div>
            <div class="user-form"></div>
         </div>
      `;
   }
}

/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
