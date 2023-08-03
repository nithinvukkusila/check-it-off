import { useState, useEffect } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask } from "../store/actionCreators";
import uuid4 from "uuid4";

const AddTodo = ({ todo, editTodo, cancel }) => {
  const dispatch = useDispatch();
  const [taskDetails, setTaskDetails] = useState({
    taskName: "",
    description: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setTaskDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const addTodo = () => {
    if (taskDetails.taskName) {
      dispatch(
        addTask({
          ...taskDetails,
          id: uuid4(),
          completed: false,
        })
      );
    } else {
      alert('Task Name should not be empty')
    }
    setTaskDetails({
      taskName: "",
      description: "",
    });
  };

  const handleEdit = () => {
    if (todo) {
      editTodo({
        ...todo,
        taskName: taskDetails.taskName,
        description: taskDetails.description,
      });
    }
  };

  useEffect(() => {
    if (todo) {
      setTaskDetails({
        taskName: todo.taskName,
        description: todo.description,
      });
    }
  }, [todo]);

  return (
    <>
      <div className="input-group">
        <Input
          name="taskName"
          value={taskDetails.taskName}
          placeholder="Task Name"
          onChange={handleInput}
        />
        <Input
          name="description"
          placeholder="Description"
          value={taskDetails.description}
          onChange={handleInput}
        />
      </div>

      {editTodo && todo ? (
        <div>
          <Button text="update Todo" onClick={handleEdit} />
          <Button text="Cancel" onClick={cancel} />
        </div>
      ) : (
        <div className="add-todo">
          <Button text="Add Todo" onClick={addTodo} />
        </div>
      )}
    </>
  );
};

export default AddTodo;
