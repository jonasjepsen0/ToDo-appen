import { Todo } from "../../models/todo.ts"
import { Div } from "../atoms/atoms.ts"
import { todoItem } from "../molecules/todoitem.ts"

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
