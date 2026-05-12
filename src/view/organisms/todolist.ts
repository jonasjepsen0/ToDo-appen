import { Todo } from "../../models/todo"
import { Div } from "../atoms/atoms"
import { todoItem } from "../molecules/todoItem"

export const todoList = (
    todos: Todo[],
    onToggle: (id: string) => void,
    onDelete: (id: string) => void,
) => {
    const container = Div("flex flex-col gap-2")

    todos.forEach(todo => {
        container.append(todoItem(todo, onToggle, onDelete))
    })

    return container
}
