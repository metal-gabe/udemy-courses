/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
// Context / Store / Router
// Components / Classes
// Assets
// Constants / Models / Types
// Utils / Methods / Mocks
// Styles

/* ========================================================================== */
// INTERNAL HELPERS, INTERFACES, VARS & SET UP
/* ========================================================================== */
export interface Location {
   lat: number;
   lng: number;
}

/**
 * Instructions to every other class
 * on how they can be an argument to `addMarker`
 */
export interface MapEntity {
   location: Location;
   markerColor?: string;
   markerContent(): string;
}

/* ========================================================================== */
// DEFINING THE `MAP` COMPONENT
/* ========================================================================== */
export class Map {
   private googleMap: google.maps.Map;

   constructor(divId: string) {
      const mapElement: HTMLElement = document.getElementById(divId);

      this.googleMap = new google.maps.Map(mapElement, {
         center: {
            lat: 0,
            lng: 0,
         },
         zoom: 1,
      });
   }

   // Good way of writing code
   public addMarker(entity: MapEntity): void {
      const { location, markerColor } = entity;
      const content = entity.markerContent();
      // TypeScript didn't like me destructuring `markerContent` on r2g2-md
      // it somehow lost the context of `this` for the incoming entity
      const url = `http://maps.google.com/mapfiles/ms/icons/${markerColor || 'red'}-dot.png`;

      const marker = new google.maps.Marker({
         icon: {
            url,
         },
         map: this.googleMap,
         position: {
            lat: location.lat,
            lng: location.lng,
         },
      });

      const infoWindow = new google.maps.InfoWindow({
         content,
      });

      marker.addListener('click', () => {
         infoWindow.open(this.googleMap, marker);
      });
   }
}
