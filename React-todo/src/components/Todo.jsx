import "../css/todo.css";
export default function Todo() {
  return (
    <>
      <div className="todoBox d-flex my-1 p-0">
        <div className="title col-5 fs-4">Title</div>
        <div className="status col-3">
          <select
            className="form-select col"
            aria-label="Default select example"
          >
            <option value="1" selected>
              Waiting
            </option>
            <option value="2">Done</option>
          </select>
        </div>
        <button className="btn col-2">
          <i className="bi bi-trash3 text-danger"></i>
        </button>
      </div>
      <hr />
    </>
  );
}
