import { createTodo, Todo } from "../models/todo"
import { Div } from "../view/atoms/atoms"
import { todoForm } from "../view/molecules/todoForm"
import { todoList } from "../view/organisms/todoList"
import { render } from "../utils/dom"
import { loadTodos, saveTodos } from "../utils/storage"

export const todoController = () => {
    let todos: Todo[] = loadTodos()

    const draw = () => {
        saveTodos(todos)

        const root = Div()
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
