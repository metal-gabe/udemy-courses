/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
// Context / Stores / Routers
// Components / Classes / Controllers / Services
// Assets
// Constants / Models / Interfaces / Types
// Utils / Methods / Mocks / Decorators
// Styles

/* ========================================================================== */
// INTERNAL HELPERS, INTERFACES, VARS & SET UP
/* ========================================================================== */
/* ========================================================================== */
// DEFINING THE GLOBAL TYPES
/* ========================================================================== */
export type Action = DeleteTodoAction | FetchTodosAction;

export enum ActionTypes {
   DeleteTodo = 'DeleteTodo',
   FetchTodos = 'FetchTodos',
}

export interface AppProps extends StateProps {
   deleteTodo: (id: number) => DeleteTodoAction;
   fetchTodos: Function;
}

export interface AppState {
   fetching: boolean;
}

export interface DeleteTodoAction {
   payload: number;
   type: ActionTypes.DeleteTodo;
}

export interface FetchTodosAction {
   payload: Todo[];
   type: ActionTypes.FetchTodos;
}

export interface RootState {
   todos: Todo[];
}

export interface StateProps {
   todos: Todo[];
}

export interface Todo {
   completed: boolean;
   id: number;
   title: string;
}

/* ========================================================================== */
// ALL REQUIRED EXPORTS
/* ========================================================================== */
