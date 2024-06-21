import Todo from "./Todo";
import { useEffect, useState } from "react";

export default function TodoList() {
  const [height, setHeight] = useState(0);
  useEffect(() => {
    const height = window.innerHeight;
    setHeight(height);
  }, []);
  return (
    <>
      <div className="col-10 mt-3 py-3 px-0">
        {height > 1024 ? (
          <>
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
          </>
        ) : height < 700 ? (
          <>
            <Todo />
            <Todo />
            <Todo />
          </>
        ) : (
          <>
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
          </>
        )}
      </div>
    </>
  );
}
