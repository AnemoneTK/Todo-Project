import { useEffect, useRef } from "react";
import "../css/todo.css";
import PropTypes from "prop-types";

export default function Todo({
  id,
  title,
  status,
  setIsLoading,
  setTodoHeight,
}) {
  const todoRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setTodoHeight(todoRef.current.clientHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setTodoHeight]);

  const updateStatus = async () => {
    setIsLoading(true);
    await fetch(`https://6662b06962966e20ef0985b2.mockapi.io/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: !status }),
    });
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const deleteTodo = async () => {
    setIsLoading(true);
    await fetch(`https://6662b06962966e20ef0985b2.mockapi.io/todos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="todoBox d-flex my-1 p-0" ref={todoRef}>
      <div className="col-8 col-sm-8 col-md-6 col-lg-6 titleBox">
        <div className="title col-2 col-sm-2 text-center">{id + "."}</div>
        <div className="title col-10">{title}</div>
      </div>
      <div
        className="status col-1 col-sm-1 col-md-2 col-lg-2"
        onClick={() => {
          updateStatus();
        }}
      >
        <input
          type="checkbox"
          name="status"
          checked={status}
          onChange={() => {
            updateStatus;
          }}
        />
        <div className="statusName checkboxStatus">
          {status ? "Done" : "Waiting"}
        </div>
      </div>
      <button
        className="btn col-1"
        onClick={() => {
          deleteTodo();
        }}
      >
        <i className="delBtn bi bi-trash3 text-danger"></i>
      </button>
    </div>
  );
}

Todo.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  setIsLoading: PropTypes.func.isRequired,
  setTodoHeight: PropTypes.func.isRequired,
};
