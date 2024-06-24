import "../css/pagination.css";

export default function Pagination() {
  return (
    <div className="pagination col-10 d-flex ">
      <button className="col-3 rounded-2">Previous</button>
      <span>1 of 10</span>
      <button className="col-3 rounded-2">Next</button>
    </div>
  );
}
