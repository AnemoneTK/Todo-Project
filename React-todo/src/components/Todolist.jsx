import Todo from "./Todo";
import { useEffect, useState } from "react";
import "../css/todoList.css";
import PropTypes from "prop-types";

export default function TodoList({ todos, setTodosPerPage }) {
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

  useEffect(() => {
    const calculateTodosPerPage = () => {
      if (height < 400) {
        return 1;
      } else if (height >= 400 && height <= 600) {
        return 2;
      } else if (height >= 600 && height <= 800) {
        return 4;
      } else if (height >= 800 && height < 1000) {
        return 5;
      } else if (height >= 1000 && height < 1100) {
        return 6;
      } else if (height >= 1100 && height < 1200) {
        return 7;
      } else if (height >= 1200 && height < 1500) {
        return 8;
      } else {
        return 10;
      }
    };

    setTodosPerPage(calculateTodosPerPage());
  }, [height, setTodosPerPage]);

  return (
    <div className="todoList col-10 mt-3 mt-sm-3 mt-lg-4 mb-sm-1 mb-lg-4">
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.name}
            status={todo.status}
          />
        );
      })}
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  setTodosPerPage: PropTypes.func.isRequired,
};
