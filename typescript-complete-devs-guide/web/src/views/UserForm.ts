/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
// Context / Store / Router
// Components / Classes / Controllers / Services
// Assets
// Constants / Models / Interfaces / Types
import { EventsMap, UserProps } from '../models/general';
import { User } from '../models/User';
import { View } from './View';
// Utils / Methods / Mocks
// Styles

/* ========================================================================== */
// INTERNAL HELPERS, INTERFACES, VARS & SET UP
/* ========================================================================== */
/* ========================================================================== */
// DEFINING THE `USER FORM` COMPONENT
/* ========================================================================== */
export class UserForm extends View<User, UserProps> {
   // constructor() {}

   get eventsMap(): EventsMap {
      return {
         'click:.save-model': this.onSaveModelClick,
         'click:.set-age': this.onSetAgeClick,
         'click:.set-name': this.onSetNameClick,
         // not using, just keeping them for reference
         // 'click:button': this.onClickButton,
         // 'mouseenter:h1': this.onHeaderHover,
         // 'drag:div': this.onDragDiv,
      };
   }

   template(): string {
      return `
         <div class="user-form">
            <input placeholder="Enter a new name" />
            <button class="set-name">Change Name</button>
            <button class="set-age">Set Random Age</button>
            <button class="save-model">Save User</button>
         </div>
      `;
   }

   /* ========================================================================== */
   // BOUND EVENT HANDLERS
   /* ========================================================================== */
   onSaveModelClick = (): void => {
      this.model.save();
   };

   onSetAgeClick = (): void => {
      console.debug('The user clicked the set age button');
      this.model.setRandomAge();
   };

   onSetNameClick = (): void => {
      console.debug('The user clicked the set name button');
      const input = this.parent.querySelector('input');

      if (input?.value.trim()) {
         this.model.set({ name: input.value });
      }

      input.value = '';
   };
}
