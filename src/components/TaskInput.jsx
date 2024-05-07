/* eslint-disable react/prop-types */
import { useState } from "react"

export default function TaskInput({ onAddTask }) {
  const [inputVal, setInputVal] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (inputVal) {
      onAddTask(inputVal)
      setInputVal("")
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="py-6 px-4 flex justify-center gap-2 w-full"
    >
      <input
        className="text-lg p-2 rounded-full text-black w-full  placeholder-gray-400/70"
        type="text"
        placeholder="Insira uma nova tarefa"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button
        type="submit"
        className="font-semibold bg-blue-500 py-2 px-4 rounded-full hover:bg-blue-600 transition-all w-auto"
      >
        Adicionar
      </button>
    </form>
  )
}
