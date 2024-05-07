import { useState, useEffect } from "react"
import TaskInput from "./components/TaskInput"
import TaskList from "./components/TaskList"

export default function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks") || [])
  )

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  function addTask(task) {
    setTasks([...tasks, { id: crypto.randomUUID(), title: task, done: false }])
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  function completeTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    )
  }

  const deleteAllTasks = () => setTasks([])

  return (
    <>
      <header className="bg-blue-500 w-full text-center p-6 border-b-2 border-blue-200 mb-4">
        <h1 className="font-bold text-2xl md:text-3xl">
          Lista de Tarefas - React
        </h1>
      </header>

      <div className="md:w-1/4">
        <TaskInput onAddTask={addTask} />
        <TaskList
          tasks={tasks}
          onDeleteTask={deleteTask}
          onCompleteTask={completeTask}
          onDeleteAllTasks={deleteAllTasks}
        />
      </div>
    </>
  )
}
