import { useState } from "react";
import "../css/todo.css";
import PropTypes from "prop-types";

export default function Todo({ title, status }) {
  const [check, setCheck] = useState(status);
  return (
    <>
      <div className="todoBox d-flex my-1 p-0">
        <div className="title col-4">{title}</div>
        <div
          className="status col-2"
          onClick={(e) => {
            if (e.target.type !== "checkbox") {
              setCheck(!check);
            }
          }}
        >
          <input
            type="checkbox"
            name="status"
            checked={check}
            onChange={() => {
              setCheck(!check);
            }}
          />
          <div className="statusName">{check ? "Done" : "Waiting"}</div>
        </div>
        <button className="btn col-2">
          <i className="bi bi-trash3 text-danger"></i>
        </button>
      </div>
      <hr />
    </>
  );
}

Todo.propTypes = {
  key: PropTypes.number,
  title: PropTypes.string,
  status: PropTypes.bool,
};
