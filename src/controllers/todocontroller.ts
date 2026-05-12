import { createTodo, Todo } from "../models/todo.ts"
import { Div } from "../view/atoms/atoms.ts"
import { todoForm } from "../view/molecules/todoform.ts"
import { todoList } from "../view/organisms/todolist.ts"
import { render } from "../utils/dom.ts"
import { loadTodos, saveTodos } from "../utils/storage.ts"

export const todoController = () => {
    let todos: Todo[] = loadTodos()

    const draw = () => {
        saveTodos(todos)

        const root = Div("max-w-md mx-auto p-6 bg-white rounded-lg shadow-md")
        root.append(todoForm(addTodo))
        root.append(todoList(todos, toggleTodo, deleteTodo))
        render("app", root, true)
    }

    const addTodo = (text: string) => {
        todos.push(createTodo(text))
        draw()
    }

    const toggleTodo = (id: string) => {
        const todo = todos.find(t => t.id === id)
        if (todo) {
            todo.done = !todo.done
        }
        draw()
    }

    const deleteTodo = (id: string) => {
        todos = todos.filter(t => t.id !== id)
        draw()
    }

    draw()
}
