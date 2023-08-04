
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
const TodoList = () => {
  const todos = useSelector((state) => state.tasks.tasks);
  console.log(todos)
  if (!todos || todos.length === 0) {
    return <div>No tasks found.</div>;
  }
  return (
    <div className="todo-list">
      { todos && todos.map((todo) => {
        return <TodoItem todo={todo} key={todo.id} />;
      })}
    </div>
  );
};

export default TodoList;
