import TodoList from "../components/TodoList";
import AddTodo from "../components/AddTodo";

const AllTodos = () => {
  return (
    <div className="container">
      <h3>Check It Off </h3>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default AllTodos;
