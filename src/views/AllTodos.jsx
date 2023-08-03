import TodoList from "../components/TodoList";
import AddTodo from "../components/AddTodo";
import { useSelector } from "react-redux";

const AllTodos = () => {
  const todos = useSelector((state) => state.tasks);

  return (
    <div className="container">
      <div>Todo List</div>
      <AddTodo />
      <TodoList todos={todos} />
    </div>
  );
};

export default AllTodos;
