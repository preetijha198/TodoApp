import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import WeatherWidget from "../components/WeatherWidget";
import { useNavigate } from "react-router-dom";

const TodoPage = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate("/");
    return null;
  }

  return (
    <div className="container">
      <button onClick={() => dispatch(logout())}>Logout</button>
      <TaskInput />
      <TaskList />
      <WeatherWidget />
    </div>
  );
};

export default TodoPage;
