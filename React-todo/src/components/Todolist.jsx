import Todo from "./Todo";
import { useEffect, useState } from "react";
import "../css/todoList.css";
import PropTypes from "prop-types";
import { ThreeDots } from "react-loader-spinner";

export default function TodoList({ todos, setTodosPerPage, isLoading }) {
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
      } else if (height > 600 && height <= 800) {
        return 3;
      } else if (height > 800 && height < 900) {
        return 4;
      } else if (height > 900 && height < 1000) {
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
    <>
      {!isLoading && (
        <div className="todoList col-10 mt-3 mt-sm-3 mt-lg-4 mb-1 mb-sm-1 mb-md-2 mb-lg-3">
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
      )}

      {isLoading && (
        <div className="isLoading mt-3 mt-sm-3 mt-lg-4 mb-1 mb-sm-1 mb-lg-4">
          <ThreeDots
            visible={true}
            height="80"
            width="100"
            color="#14121f"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperClass="d-flex align-items-center justify-content-center p-0 m-0"
          />
        </div>
      )}
    </>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  setTodosPerPage: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};
