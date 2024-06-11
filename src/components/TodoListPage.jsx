import { useState } from "react";

const TodoListPage = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleInputTodo = (event) => {
    setNewTodo(event.target.value);
  };

  //   membuat id untuk newTodo
  const handleAddTodo = (event) => {
    event.preventDefault();
    if (newTodo.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  //   membuat fungsi hapus todo
  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  //membuat fungsi untuk cek box
  const handleToggleComplete = (id) => {
    const updatedTodos = todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    setTodos(updatedTodos);
  };

  return (
    <div className="flex justify-center items-center flex-col bg-white min-h-screen">
      <h1 className="text-2xl mb-4">Todo List</h1>
      <form
        action=""
        className="flex bg-emerald-800 p-6 rounded-lg shadow-md mb-4 justify-between items-center flex-col"
        onSubmit={handleAddTodo}
      >
        <input
          type="text"
          onChange={handleInputTodo}
          value={newTodo}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
        <button
          type="submit"
          className="bg-indigo-400 text-white mt-2 p-2 rounded hover:bg-indigo-700 "
        >
          Send List
        </button>
      </form>
      <ul className="bg-emerald-800 p-6 rounded-lg shadow-md w-96">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`bg-white text-lg font-medium py-2 border last:border-b-0 ${todo.completed ? "line-through" : ""}`}
          >
            {/* bikin checkbox */}
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleComplete(todo.id)}
              className="mr-2"
            />
            {todo.text}
            <button
              onClick={() => handleDeleteTodo(todo.id)}
              className="ml-2 text-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoListPage;
