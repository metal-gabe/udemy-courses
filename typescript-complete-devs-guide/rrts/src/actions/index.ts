/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
import axios from 'axios';
import { Dispatch } from 'redux';
// Context / Stores / Routers
// Components / Classes / Controllers / Services
// Assets
// Constants / Models / Interfaces / Types
import { ActionTypes, DeleteTodoAction, FetchTodosAction, Todo } from '../types';
// Utils / Methods / Mocks / Decorators
// Styles

/* ========================================================================== */
// INTERNAL HELPERS, INTERFACES, VARS & SET UP
/* ========================================================================== */
const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

/* ========================================================================== */
// DEFINING THE `GLOBAL REDUX` ACTIONS
/* ========================================================================== */
export const deleteTodo = (id: number): DeleteTodoAction => {
   return {
      payload: id,
      type: ActionTypes.DeleteTodo,
   };
};

export const fetchTodos = () => {
   return async (dispatch: Dispatch): Promise<void> => {
      const response = await axios.get<Todo[]>(TODOS_URL);

      dispatch<FetchTodosAction>({
         type: ActionTypes.FetchTodos,
         payload: response.data,
      });
   };
};

/* ========================================================================== */
// ALL REQUIRED EXPORTS
/* ========================================================================== */
