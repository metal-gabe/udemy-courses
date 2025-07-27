import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
   completed: boolean;
   id: number;
   title: string;
   userId: number;
}

axios.get(url)
   .then(response => {
      const todo = response.data as Todo;
      const { completed, id, title } = todo;
      logTodo(completed, id, title);
   })
   .catch(error => {
      console.error("There was an error getting your data.");
   });

const logTodo = (completed: boolean, id: number, title: string) => {
   console.log(`
      The Todo with ID: ${id}
      Has a title of: "${title}"
      Is it finished? ${completed ? "Yes" : "No"}
   `);
};
