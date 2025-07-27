/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
// Context / Store / Router
// Components / Classes / Controllers / Services
// Assets
// Constants / Models / Interfaces / Types
import { EventsMap, Regions, RegionsMap } from '../models/general';
import { Model } from '../models/Model';
// Utils / Methods / Mocks
// Styles

/* ========================================================================== */
// INTERNAL HELPERS, INTERFACES, VARS & SET UP
/* ========================================================================== */
/* ========================================================================== */
// DEFINING THE `VIEW` COMPONENT
/* ========================================================================== */
export abstract class View<T extends Model<K>, K> {
   regions: Regions = {};

   constructor(public parent: Element, public model: T) {
      this.bindModel();
   }

   abstract template(): string;

   bindEvents(fragment: DocumentFragment): void {
      for (let eventKey in this.eventsMap) {
         const [eventName, selector] = eventKey.split(':');

         fragment.querySelectorAll(selector).forEach(element => {
            element.addEventListener(eventName, this.eventsMap[eventKey]);
         });
      }
   }

   bindModel(): void {
      this.model.on('change', () => {
         this.render();
      });
   }

   eventsMap(): EventsMap {
      return {};
   }

   mapRegions(fragment: DocumentFragment): void {
      const regionsMap = this.regionsMap();

      for (let key in regionsMap) {
         const selector = regionsMap[key];
         const element = fragment.querySelector(selector);

         if (element) {
            this.regions[key] = element;
         }
      }
   }

   onRender(): void {}

   regionsMap(): RegionsMap {
      return {};
   }

   render(): void {
      this.parent.innerHTML = '';
      const templateElement = document.createElement('template');
      templateElement.innerHTML = this.template();
      this.bindEvents(templateElement.content);
      this.mapRegions(templateElement.content);
      this.onRender();
      this.parent.appendChild(templateElement.content);
   }
}

/* ========================================================================== */
// ALL REQUIRED EXPORTS
/* ========================================================================== */
