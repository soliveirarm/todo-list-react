/* eslint-disable react/prop-types */
import ClearAllTasks from "./ClearAllTasks"
import Task from "./Task"

export default function TaskList({
  tasks,
  onDeleteTask,
  onCompleteTask,
  onDeleteAllTasks,
}) {
  if (tasks.length === 0) {
    return (
      <p className="text-slate-300 mt-6 text-center">
        Não há tarefas no momento
      </p>
    )
  }

  return (
    <ul className="flex flex-col gap-4 w-full p-2">
      <ClearAllTasks onDeleteAllTasks={onDeleteAllTasks} />
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDeleteTask={() => onDeleteTask(task.id)}
          onCompleteTask={() => onCompleteTask(task.id)}
        />
      ))}
    </ul>
  )
}
