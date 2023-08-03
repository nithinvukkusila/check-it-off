
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
const TodoList = () => {
  const todos = useSelector((state) => state.tasks);
  return (
    <div className="todo-list">
      {todos.map((todo) => {
        return <TodoItem todo={todo} key={todo.id} />;
      })}
    </div>
  );
};

export default TodoList;
