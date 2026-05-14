import React, { useState } from "react";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [filter, setFilter] = useState("All");

  const addTodo = () => {
    if (!task.trim()) return;

    setTodos([...todos, { text: task, completed: false }]);
    setTask("");
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const filteredTodos = todos.filter((t) => {
    if (filter === "Completed") return t.completed;
    if (filter === "Incomplete") return !t.completed;
    return true;
  });

  return (
    <div>
      <h2>Todo App</h2>

      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={addTodo}>Add</button>

      <div>
        <button onClick={() => setFilter("All")}>All</button>

        <button onClick={() => setFilter("Completed")}>
          Completed
        </button>

        <button onClick={() => setFilter("Incomplete")}>
          Incomplete
        </button>
      </div>

      <ul>
        {filteredTodos.map((t, i) => (
          <li key={i}>
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => toggleTodo(i)}
            />

            {t.text}
          </li>
        ))}
      </ul>
    </div>
  );
}