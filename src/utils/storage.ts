import { Todo } from "../models/todo"

const STORAGE_KEY = "todos"

export const loadTodos = (): Todo[] => {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    return JSON.parse(raw)
}

export const saveTodos = (todos: Todo[]): void => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
}
