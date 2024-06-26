import InputBox from "./components/InputBox";
import "./App.css";
import TodoList from "./components/Todolist";
import Pagination from "./components/Pagination";
import Setting from "./components/Setting";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Sort
  const [sortOrder, setSortOrder] = useState("asc");
  const sortTodos = (todos, order) => {
    return todos.sort((a, b) => {
      if (order === "asc") {
        return a.id - b.id;
      } else {
        return b.id - a.id;
      }
    });
  };

  // Filter
  const [filter, setFilter] = useState("all");
  const filterTodos = (todos, filter) => {
    return todos.filter((todo) => {
      if (filter == "all") {
        return todo;
      }
      if (filter == "waiting") {
        return todo.status == false;
      }
      if (filter == "done") {
        return todo.status == true;
      }
    });
  };

  // Search
  const [search, setSearch] = useState("");
  const searchTodos = (todos, search) => {
    // if (!search) return todos;
    // return todos.filter((todo) => {
    //   todo.name.toLowerCase().includes(search);
    // });
    return todos.filter((todo) => {
      return search.toLowerCase() == ""
        ? todo
        : todo.name.toLowerCase().includes(search.toLowerCase());
    });
  };

  const sortedTodos = sortTodos([...todos], sortOrder);
  const filteredTodos = filterTodos(sortedTodos, filter);
  const searchedTodos = searchTodos(filteredTodos, search);

  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage, setTodosPerPage] = useState(5);

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = searchedTodos.slice(indexOfFirstTodo, indexOfLastTodo);

  const fetchTodos = async () => {
    const response = await axios.get(
      "https://6662b06962966e20ef0985b2.mockapi.io/todos"
    );
    setTodos(response.data);

    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  useEffect(() => {
    fetchTodos();
  }, [isLoading]);

  return (
    <>
      <div className="warp container">
        <div className="box col-12 col-md-10 col-lg-10 col-xl-6 rounded-4">
          <div className="appName mb-1 mb-sm-1 mb-md-3">[React]-Todo App</div>
          <InputBox setIsLoading={setIsLoading} />
          <Setting
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
            filter={filter}
            setFilter={setFilter}
            search={search}
            setSearch={setSearch}
          />
          <TodoList
            todos={currentTodos}
            totalTodos={searchedTodos.length}
            setTodosPerPage={setTodosPerPage}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
          <Pagination
            totalTodos={searchedTodos.length}
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
