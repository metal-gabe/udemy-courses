/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
import { Component } from 'react';
// Packages
import { connect } from 'react-redux';
// Context / Stores / Routers
import { deleteTodo, fetchTodos } from '../actions';
// Components / Classes / Controllers / Services
// Assets
// Constants / Models / Interfaces / Types
import { AppProps, AppState, RootState, StateProps, Todo } from '../types';
// Utils / Methods / Mocks / Decorators
// Styles

/* ========================================================================== */
// INTERNAL HELPERS, INTERFACES, VARS & SET UP
/* ========================================================================== */
const mapStateToProps = (state: RootState): StateProps => {
   const { todos } = state;
   return { todos };
};

/* ========================================================================== */
// DEFINING THE `MAIN APP` COMPONENT
/* ========================================================================== */
class Bllr extends Component<AppProps, AppState> {
   constructor(props: AppProps) {
      super(props);

      this.state = {
         fetching: false,
      };
   }

   componentDidUpdate(prevProps: AppProps): void {
      const { todos: prevTodos } = prevProps;
      const { todos } = this.props;

      if (!prevTodos.length && todos.length) {
         this.setState({ fetching: false });
      }
   }

   onButtonClick = (): void => {
      this.setState({ fetching: true });

      setTimeout(() => {
         this.props.fetchTodos();
      }, 2000);
   };

   onTodoClick = (id: number): void => {
      this.props.deleteTodo(id);
   };

   renderList(): JSX.Element[] {
      return this.props.todos.map((todo: Todo) => {
         return (
            <li key={todo.id} onClick={() => this.onTodoClick(todo.id)}>
               {todo.title}
            </li>
         );
      });
   }

   render() {
      return (
         <div>
            <button className="" type="button" onClick={this.onButtonClick}>
               Rooney sucks!!!
            </button>
            <p>{this.state.fetching ? 'LOADING...' : null}</p>
            <ol>{this.renderList()}</ol>
         </div>
      );
   }
}

/* ========================================================================== */
// ALL REQUIRED EXPORTS
/* ========================================================================== */
export const App = connect(mapStateToProps, { deleteTodo, fetchTodos })(Bllr);
