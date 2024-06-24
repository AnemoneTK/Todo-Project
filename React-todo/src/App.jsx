import InputBox from "./components/InputBox";
import "./App.css";
import TodoList from "./components/Todolist";
import Pagination from "./components/Pagination";
import { useEffect, useState } from "react";
import axios from "axios";
import Setting from "./components/Setting";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchTodos = async () => {
      const response = await axios.get(
        "https://6662b06962966e20ef0985b2.mockapi.io/todos"
      );
      setTodos(response.data);

      setTimeout(() => {
        setIsLoading(false);
      }, 100);
    };
    fetchTodos();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage, setTodosPerPage] = useState(5);

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  return (
    <>
      <div className="warp container">
        <div className="box col-12 col-md-10 col-lg-10 col-xl-6 rounded-4">
          <Setting />
          <div className="appName mb-1 mb-sm-3 mb-md-5">[React]-Todo App</div>
          <InputBox />
          <TodoList
            todos={currentTodos}
            setTodosPerPage={setTodosPerPage}
            isLoading={isLoading}
          />
          <Pagination
            totalTodos={todos.length}
            todosPerPage={todosPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            isLoading={isLoading}
          />
        </div>
      </div>
    </>
  );
}
