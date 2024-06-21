import Todo from "./Todo";
import { useEffect, useState } from "react";
import "../css/todoList.css";

export default function TodoList() {
  const [height, setHeight] = useState(0);
  useEffect(() => {
    const height = window.innerHeight;
    setHeight(height);
  }, []);
  return (
    <>
      <div className="todoList col-10 mt-sm-3 mt-lg-4 mb-sm-1 mb-lg-4 ">
        {height > 1024 ? (
          <>
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
          </>
        ) : height < 700 ? (
          <>
            <Todo />
            <Todo />
            <Todo />
          </>
        ) : (
          <>
            <Todo />
            <Todo />
            <Todo />
            <Todo />
          </>
        )}
      </div>
    </>
  );
}
