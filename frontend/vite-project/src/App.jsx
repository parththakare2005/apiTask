import { useState, useEffect } from "react";
import { getTasks, addTask, toggleTask } from "./api";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTasks();
  }, []);

  async function loadTasks() {
    const data = await getTasks();
    setTasks(data);
    setLoading(false);
  }

  async function addNewTask() {
    if (task === "") {
      alert("Enter a task");
      return;
    }

    const newTask = await addTask(task);

    setTasks([...tasks, newTask]);
    setTask("");
  }

  async function completeTask(id) {
    const updated = await toggleTask(id);

    const newList = tasks.map((t) => {
      if (t.id === id) {
        return updated;
      } else {
        return t;
      }
    });

    setTasks(newList);
  }

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>Task Manager</h1>

      <input
        type="text"
        placeholder="Enter Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addNewTask}>Add Task</button>

      <hr />

      {tasks.map((t) => (
        <div key={t.id}>
          <span
            style={{
              textDecoration: t.completed ? "line-through" : "none",
              marginRight: "10px",
            }}
          >
            {t.title}
          </span>

          <button onClick={() => completeTask(t.id)}>
            {t.completed ? "Undo" : "Complete"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;