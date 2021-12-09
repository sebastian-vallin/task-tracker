import { useState } from "react";
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

  return (
    <div className="container">
      <Header />
      <Tasks onToggle={toggleReminder} onDelete={deleteTask} tasks={tasks} />
    </div>
  );
}

export default App;
