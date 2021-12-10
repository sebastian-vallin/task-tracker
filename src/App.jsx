import { useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const initialTasks = [
  {
    id: 1,
    text: "Task 1",
    day: "Dec 10th at 2:00pm",
    reminder: true,
  },
  {
    id: 2,
    text: "Task 2",
    day: "Dec 12th at 5:00pm",
    reminder: false,
  },
  {
    id: 3,
    text: "Task 3",
    day: "Dec 10th at 9:00am",
    reminder: true,
  },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [showAdd, setShowAdd] = useState(false);

  function toggleReminder(id) {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, reminder: !task.reminder } : task
    );

    // const newTasks2 = tasks.map((task) => {
    //   if (task.id === id) {
    //     return { ...task, reminder: !task.reminder };
    //   }
    //   return task;
    // });

    setTasks(newTasks);
  }

  function deleteTask(id) {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }

  function addTask(task) {
    let id = 0;
    if (tasks.length > 0) {
      // [task1, task2, task3]
      //  [0]     [1]    [2]
      // .length => 3
      id = tasks[tasks.length - 1].id + 1;
    }
    const newTask = { ...task, id };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAdd(!showAdd)} showAdd={showAdd} />
      {showAdd && <AddTask onSubmit={addTask} />}
      <Tasks onToggle={toggleReminder} onDelete={deleteTask} tasks={tasks} />
    </div>
  );
}

export default App;
