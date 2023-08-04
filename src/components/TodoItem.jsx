import editIcon from "../assets/pencil.png";
import binIcon from "../assets/bin.png";
import checked from "../assets/checked.png";
import unChecked from "../assets/notcompleted.png";
import { useDispatch } from "react-redux";
import { removeTask, toggleComplete, editTask } from "../store/actionCreators";
import { useState } from "react";
import AddTodo from "./AddTodo";

const TodoItem = ({ todo }) => {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const dispatch = useDispatch();
  const deleteTask = (id) => {
    dispatch(removeTask(id));
  };
  const toggleTodo = (id) => {
    dispatch(toggleComplete(id));
  };
  const handleEdit = (id) => {
    setEditingTaskId(id);
  };

  const submitEdit = (taskDetails) => {
    setEditingTaskId(null);
    dispatch(editTask(taskDetails));
  };

  const cancelEdit = () => {
    setEditingTaskId(null);
  };

  return (
    <div>
      {editingTaskId === todo.id ? (
        <AddTodo todo={todo} cancel={cancelEdit} editTodo={submitEdit} />
      ) : (
        <>
          <div className="todo-item">
            <div className="details">
              <img
                alt="check and uncheck icons"
                src={todo.completed ? checked : unChecked}
                onClick={() => toggleTodo(todo.id)}
              />
              <div>
                <p
                  className="title"
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                >
                  {todo.taskName}
                </p>
                <p className="description">{todo.description}</p>
              </div>
            </div>
            <div className="actions">
              <img
                alt="delete"
                src={binIcon}
                onClick={() => deleteTask(todo.id)}
              />
              {!todo.completed ? (
                <img
                  alt="edit"
                  src={editIcon}
                  onClick={() => handleEdit(todo.id)}
                />
              ) : null}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;
