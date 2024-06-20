import InputBox from "./components/InputBox";
import "./App.css";
import TodoList from "./components/Todolist";

export default function App() {
  return (
    <>
      <div className="warp container">
        <div className="box col-12 col-md-10 col-lg-6 rounded-4">
          <InputBox />
          <TodoList />
        </div>
      </div>
    </>
  );
}
