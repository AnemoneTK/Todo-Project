import "../css/pagination.css";
import PropTypes from "prop-types";

export default function Pagination({
  totalTodos,
  todosPerPage,
  currentPage,
  setCurrentPage,
  isLoading,
}) {
  const totalPage = Math.ceil(totalTodos / todosPerPage);

  return (
    <div className="pagination col-10 d-flex mt-3">
      <button
        className="col-1 rounded-2"
        onClick={() => setCurrentPage(1)}
        disabled={currentPage === 1}
      >
        <i className="bi bi-chevron-double-left"></i>
      </button>
      <button
        className="col-3 rounded-2"
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span className="col-3 col-sm-3 col-md-2 text-center">
        {isLoading ? 0 : currentPage} of {totalPage == 0 ? "1" : totalPage}
      </span>
      <button
        className="col-3 rounded-2"
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPage}
      >
        Next
      </button>
      <button
        className="col-1 rounded-2"
        onClick={() => setCurrentPage(totalPage)}
        disabled={currentPage === totalPage}
      >
        <i className=" bi bi-chevron-double-right"></i>
      </button>
    </div>
  );
}

Pagination.propTypes = {
  totalTodos: PropTypes.number,
  todosPerPage: PropTypes.number,
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};
