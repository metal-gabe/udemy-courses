/* ========================================================================== */
// DEFINING GLOBAL/GENERAL MODELS THAT WILL BE USED THROUGHOUT THE APP
/* ========================================================================== */
export type EventsMap = { [key: string]: () => void };

export type Regions = { [key: string]: Element };

export type RegionsMap = { [key: string]: string };

export interface UserProps {
   age?: number;
   id?: number;
   name?: string;
}
