import { Todo } from "../../models/todo"
import { Button, Checkbox, Div, Paragraph } from "../atoms/atoms"

export const todoItem = (
    todo: Todo,
    onToggle: (id: string) => void,
    onDelete: (id: string) => void,
) => {
    const container = Div("flex items-center gap-3 px-3 py-2 bg-gray-50 rounded")

    const checkbox = Checkbox()
    checkbox.checked = todo.done
    checkbox.onchange = () => onToggle(todo.id)

    const textClasses = todo.done ? "line-through text-gray-400" : ""
    const text = Paragraph(`m-0 flex-1 ${textClasses}`)
    text.textContent = todo.text

    const deleteBtn = Button("px-2.5 py-1 bg-red-500 hover:bg-red-600 text-white rounded text-xs cursor-pointer")
    deleteBtn.textContent = "Delete"
    deleteBtn.onclick = () => onDelete(todo.id)

    container.append(checkbox, text, deleteBtn)
    return container
}
