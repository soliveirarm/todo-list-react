/* eslint-disable react/prop-types */
export default function ClearAllTasks({ onDeleteAllTasks }) {
  return (
    <button
      onClick={onDeleteAllTasks}
      className="py-2 px-4 bg-red-500 hover:bg-transparent hover:text-red-400 hover:ring-2 hover:ring-red-400 active:opacity-90 transition-all font-medium rounded-full self-end"
    >
      Limpar todas as tarefas
    </button>
  )
}
