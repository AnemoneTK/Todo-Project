import InputBox from "./components/InputBox";
import "./App.css";
import TodoList from "./components/Todolist";
// import { useEffect, useState } from "react";

export default function App() {
  // const [height, setHeight] = useState(0);
  // useEffect(() => {
  //   const height = window.innerHeight;
  //   setHeight(height);
  // }, []);
  return (
    <>
      <div className="warp container">
        <div className="box col-12 col-md-10 col-lg-10 col-xl-6 rounded-4">
          <div className="appName mb-5">[React]-Todo App</div>
          <InputBox />
          <TodoList />
        </div>
      </div>
    </>
  );
}
