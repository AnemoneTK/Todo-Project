import { useState } from "react";
import "../css/todo.css";
export default function Todo() {
  const [check, setCheck] = useState(false);
  return (
    <>
      <div className="todoBox d-flex my-1 p-0">
        <div className="title col-4">Title</div>
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
            onChange={(e) => {
              setCheck(e.target.checked);
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
