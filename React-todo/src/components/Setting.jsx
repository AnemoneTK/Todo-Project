import { useEffect, useRef, useState } from "react";
import "../css/setting.css";
import PropTypes from "prop-types";

export default function Setting({
  sortOrder,
  setSortOrder,
  filter,
  setFilter,
}) {
  const [open, setOpen] = useState(false);
  const boxRef = useRef();

  const [done, setDone] = useState(true);
  const [waiting, setWaiting] = useState(true);

  useEffect(() => {
    if (done && waiting) {
      setFilter("all");
    }
    if (done && !waiting) {
      setFilter("done");
    }
    if (!done && waiting) {
      setFilter("waiting");
    }
  }, [done, waiting]);

  useEffect(() => {
    let handel = (e) => {
      if (open && !boxRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handel);
  });

  return (
    <>
      <div className="setting col-10 mt-3">
        <button
          className={`col-1 sortBtn rounded-2 p-0 ${
            sortOrder == "asc" ? "" : "Up"
          }`}
          onClick={() => {
            sortOrder == "asc" ? setSortOrder("desc") : setSortOrder("asc");
          }}
        >
          {sortOrder == "asc" && (
            <i className="sortIcon bi bi-sort-numeric-down p-0 m-0"></i>
          )}
          {sortOrder != "asc" && (
            <i className="sortIcon Up bi bi-sort-numeric-up p-0 m-0"></i>
          )}
        </button>
        <div className="col-4 col-sm-4 col-md-3 position-relative" ref={boxRef}>
          <button
            className={`filterBtn ${open ? "open" : ""}  col-12 rounded-2`}
            onClick={() => {
              setOpen(!open);
            }}
          >
            <i className="bi bi-filter col-2 col-sm-2 col-md-2"></i>
            <div className="filterText text-center col-10 ">
              {filter == "all" ? "All" : filter == "done" ? "Done" : "Waiting"}
            </div>
          </button>
          <div className={`filterBox ${open ? "open" : ""} rounded-2 col-12`}>
            <div
              className="status col-2 mb-2"
              onClick={(e) => {
                if (e.target.type !== "checkbox" && waiting == true) {
                  setDone(!done);
                }
              }}
            >
              <input
                type="checkbox"
                name="Done"
                checked={done}
                onChange={() => {
                  setDone(!done);
                }}
                disabled={done == true && waiting == false}
              />
              <div className="statusName">Done</div>
            </div>
            <div
              className="status col-2"
              onClick={(e) => {
                if (e.target.type !== "checkbox" && done == true) {
                  setWaiting(!waiting);
                }
              }}
            >
              <input
                type="checkbox"
                name="Waiting"
                checked={waiting}
                onChange={() => {
                  setWaiting(!waiting);
                }}
                disabled={waiting == true && done == false}
              />
              <div className="statusName">Waiting</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Setting.propTypes = {
  sortOrder: PropTypes.string,
  setSortOrder: PropTypes.func.isRequired,
  filter: PropTypes.string,
  setFilter: PropTypes.func.isRequired,
};
