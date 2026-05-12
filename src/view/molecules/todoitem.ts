import { Todo } from "../../models/todo"
import { Button, Checkbox, Div, Paragraph } from "../atoms/atoms"

export const todoItem = (
    todo: Todo,
    onToggle: (id: string) => void,
    onDelete: (id: string) => void,
) => {
    const container = Div("todo-item")

    const checkbox = Checkbox()
    checkbox.checked = todo.done
    checkbox.onchange = () => onToggle(todo.id)

    const text = Paragraph()
    text.textContent = todo.text
    if (todo.done) {
        text.style.textDecoration = "line-through"
    }

    const deleteBtn = Button()
    deleteBtn.textContent = "Delete"
    deleteBtn.onclick = () => onDelete(todo.id)

    container.append(checkbox, text, deleteBtn)
    return container
}
