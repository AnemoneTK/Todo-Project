import Todo from "./Todo";
import { useEffect, useRef, useState } from "react";
import "../css/todoList.css";
import PropTypes from "prop-types";
import { ThreeDots } from "react-loader-spinner";

export default function TodoList({
  todos,
  totalTodos,
  setTodosPerPage,
  isLoading,
  setIsLoading,
}) {
  const listRef = useRef(null);
  const [height, setHeight] = useState(0);
  const [todoHeight, setTodoHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setHeight(listRef.current.clientHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const calculateTodosPerPage = () => {
      if (listRef.current) {
        const todoPer = Math.floor(height / todoHeight);
        setTodosPerPage(todoPer);
      }
    };
    window.addEventListener("resize", calculateTodosPerPage);
    calculateTodosPerPage();
    return () => {
      window.removeEventListener("resize", calculateTodosPerPage);
    };
  }, [height, setTodosPerPage, todoHeight]);

  return (
    <>
      {!isLoading && totalTodos > 0 && (
        <div
          className="todoList col-10 mt-1 mt-sm-1 mt-lg-2 mb-1 mb-sm-1 mb-md-2 mb-lg-3"
          ref={listRef}
        >
          {todos.map((todo) => {
            return (
              <Todo
                key={todo.id}
                id={todo.id}
                title={todo.name}
                status={todo.status}
                setIsLoading={setIsLoading}
                setTodoHeight={setTodoHeight}
              />
            );
          })}
        </div>
      )}

      {!isLoading && totalTodos == 0 && (
        <div className="todoList noData col-10 mt-1 mt-sm-1 mt-lg-2 mb-1 mb-sm-1 mb-md-2 mb-lg-3">
          ... no data ...
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
  totalTodos: PropTypes.number,
  setTodosPerPage: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  setIsLoading: PropTypes.func.isRequired,
};
