import Todo from "./Todo";
import { useEffect, useState } from "react";
import "../css/todoList.css";
import PropTypes from "prop-types";

export default function TodoList({ todos }) {
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="todoList col-10 mt-sm-3 mt-lg-4 mb-sm-1 mb-lg-4 ">
        {todos.map((todo) => {
          return <Todo key={todo.id} title={todo.name} status={todo.status} />;
        })}
      </div>
    </>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(),
};
