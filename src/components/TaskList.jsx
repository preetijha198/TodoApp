import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../redux/tasksSlice";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id}>
          {task.text}
          <button className="delete-btn" onClick={() => dispatch(deleteTask(task.id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
