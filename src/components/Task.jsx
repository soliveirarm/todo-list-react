/* eslint-disable react/prop-types */

export default function Task({ task, onDeleteTask, onCompleteTask }) {
  let classes = `${
    task.done ? "line-through text-slate-300" : "text-white"
  } font-medium cursor-pointer`

  return (
    <li className="flex justify-between items-center p-2">
      <span onClick={onCompleteTask} className={classes}>
        {task.title}
      </span>
      <button
        onClick={onDeleteTask}
        className="text-sm text-red-500 font-semibold bg-slate-100 py-1 px-3 rounded-full hover:bg-red-500 hover:text-white hover:ring-2 hover:ring-slate-200 active:opacity-90 transition-all"
      >
        Remover
      </button>
    </li>
  )
}
