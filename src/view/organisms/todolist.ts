import { Todo } from "../../models/todo"
import { Div } from "../atoms/atoms"
import { todoItem } from "../molecules/todoItem"

export const todoList = (
    todos: Todo[],
    onToggle: (id: string) => void,
    onDelete: (id: string) => void,
) => {
    const container = Div("todo-list")

    todos.forEach(todo => {
        container.append(todoItem(todo, onToggle, onDelete))
    })

    return container
}
